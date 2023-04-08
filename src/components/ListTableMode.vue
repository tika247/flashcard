<template>
  <div class="list-tableMode">
    <table class="list-table">
      <caption>
        word list
      </caption>
      <colgroup>
        <col
          v-for="(item, index) in returnColWidth"
          :key="index"
          :style="`width: ${item}%;`"
        />
      </colgroup>

      <thead>
        <tr>
          <th><span>Word</span></th>
          <th><span>Japanese</span></th>
          <th><span>Meaning</span></th>
          <th><span>Example</span></th>
          <th><span>Note</span></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, i) in $word"
          :key="item.word"
          :class="{ 'is-clickable': returnIsSelectMode }"
          :tabindex="returnTabIndex"
          @click="openModal(i)"
          ref="dragTarget"
        >
          <list-word
            :word="item.word"
            :meaning="item.meaning"
            :japanese="item.japanese"
            :example="item.example"
            :note="item.note"
          >
          </list-word>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import ListWord from "./ListWord.vue";
import { defineComponent, inject, ref, Ref, computed, onMounted } from "vue";
const $globalProps: any = inject("$globalProps");
const $word = inject("$word") as Ref<Array<WordType>>;

defineComponent({
  name: "ListWord",
  components: {
    ListWord,
  },
});

// ref
const colWidth: Ref<Array<number>> = ref([10, 30, 20, 20, 20]);
const dragTarget: Ref<Array<HTMLTableRowElement> | null> = ref(null);

const returnColWidth = computed(() => {
  return colWidth.value.map((num) => String(num));
});

const returnTabIndex = computed((): string => {
  return $globalProps.$isSelectMode ? "0" : "-1";
});

const returnIsSelectMode = computed((): boolean => {
  return $globalProps.$isSelectMode;
});

/**
 * open modal
 * @param i
 */
const openModal = (i: number) => {
  $globalProps.$modalMode.index = i;

  if ($globalProps.$isSelectMode === "edit") {
    $globalProps.$modalMode.type = "B";
    $globalProps.$modalMode.index = i;
  } else if ($globalProps.$isSelectMode === "remove") {
    $globalProps.$modalMode.type = "C";
    $globalProps.$modalMode.index = i;
  }
};

onMounted(() => {
  if (!dragTarget.value) return;
  for (const el of dragTarget.value) {
    const dragController = new DragController(el);
    dragController.init();
  }
});

/**
 * controll drag
 * @param {HTMLTableRowElement} this.root
 */
class DragController implements DragControllerType {
  klass: { [key: string]: string };
  root: HTMLTableRowElement;
  dragTarget: NodeListOf<HTMLTableElement>;
  dragArea: Array<HTMLDivElement>;
  dragging: {
    trWidth: number;
    index: number | null;
    target: HTMLDivElement | null;
    startPoint: number | null;
    startPercentage: Array<number>;
  };
  dragTargetLength: number | null;

  constructor(root: HTMLTableRowElement) {
    this.klass = {
      dragTarget: "th, td",
      dragArea: "v-dragArea",
    };

    this.root = root;
    this.dragTarget = this.root.querySelectorAll(this.klass.dragTarget);
    this.dragArea = [];
    this.dragging = {
      trWidth: this.root.clientWidth,
      target: null,
      index: null,
      startPoint: null,
      startPercentage: colWidth.value,
    };
    this.dragTargetLength = null;
  }
  async init() {
    await this.setting();
    this.dragControll();
  }
  async setting() {
    await this.addDragArea();
  }
  async addDragArea() {
    if (!this.dragTarget) return;
    this.dragTargetLength = this.dragTarget.length - 1;

    this.dragTarget.forEach((el: HTMLTableElement, i: number) => {
      if (i !== this.dragTargetLength) {
        const dragArea = document.createElement("div");
        dragArea.classList.add(this.klass.dragArea);
        this.dragArea.push(dragArea);
        el.append(dragArea);
      }
    });
  }
  /**
   * drag
   */
  dragControll() {
    if (!this.root) return;
    document.addEventListener(
      "dragover",
      (e) => {
        e.preventDefault();
      },
      false
    );
    this.root.addEventListener("dragstart", (e: DragEvent) => {
      const target = e.target;
      if (
        target instanceof HTMLDivElement &&
        target.classList.contains(this.klass.dragArea)
      ) {
        this.dragging["target"] = target;
        this.dragging["index"] = this.dragArea.findIndex(
          (item) => item === this.dragging["target"]
        );
        this.dragging["trWidth"] = this.root.clientWidth;
        this.dragging["startPoint"] = e.pageX;
        this.dragging["startPercentage"] = colWidth.value;
      }
    });
    this.root.addEventListener("drag", (e: DragEvent) => {
      if (
        !e.target ||
        this.dragging["target"] !== e.target ||
        typeof this.dragging["index"] !== "number" ||
        !this.dragging["startPoint"]
      )
        return;

      if (
        !(e.target instanceof HTMLElement) ||
        !e.target.parentNode ||
        !(e.target.parentNode instanceof HTMLElement)
      )
        return;

      const diff = this.dragging["startPoint"] - e.pageX;
      const percentage = (diff / this.dragging["trWidth"]) * 100;
      const sign = Math.sign(percentage);
      if (sign === 0) return;
      const swing = Math.abs(percentage);
      colWidth.value = colWidth.value.map((num: number, i: number) => {
        if (
          !this.dragTargetLength ||
          typeof this.dragging["index"] !== "number"
        )
          return num;

        let newNum = 0;

        // drag to left
        if (sign === 1) {
          if (this.checkMinWidth(this.dragTarget[this.dragging["index"]])) {
            return num;
          }
          if (i === this.dragging["index"]) {
            newNum = this.dragging["startPercentage"][i] - swing;
          }
          if (i === this.dragging["index"] + 1) {
            newNum = this.dragging["startPercentage"][i] + swing;
          }
          if (newNum === 0) {
            newNum = num;
          }
        }

        // drag to right
        if (sign === -1) {
          if (this.checkMinWidth(this.dragTarget[this.dragging["index"] + 1])) {
            return num;
          }
          if (i === this.dragging["index"]) {
            newNum = this.dragging["startPercentage"][i] + swing;
          }
          if (i === this.dragging["index"] + 1) {
            newNum = this.dragging["startPercentage"][i] - swing;
          }
          if (newNum === 0) {
            newNum = num;
          }
        }

        return newNum;
      });
    });

    this.root.addEventListener("dragend", (e: DragEvent) => {
      if (this.dragging["target"] !== e.target || !this.dragging["startPoint"])
        return;
      this.dragging["target"] = null;
      this.dragging["startPoint"] = null;
    });
  }
  /**
   * check if width is lower than min
   * @param {NodeListOf<HTMLTableElement>} target
   */
  checkMinWidth = (target: HTMLTableElement) => {
    return target.clientWidth < 100 ? true : false;
  };
}
</script>

<style scoped lang="scss">
.list-table {
  table-layout: fixed;
  width: 100%;

  > caption {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }

  thead {
    > tr {
      > th,
      > td {
        position: relative;
        padding: 20px 24px;

        &:not(:first-child)::before {
          width: 1px;
          height: 2ch;
          background-color: $color-04;
          position: absolute;
          content: "";
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        > span {
          display: block;
          width: 100%;
          overflow: auto;
          position: relative;
          color: #fff;
          text-align: left;
          white-space: nowrap;
          color: $color-05;
          font-weight: 500;
        }
      }
    }
  }

  tbody {
    > tr {
      &.is-clickable {
        cursor: pointer;

        @include hover {
          background-color: rgba(134, 174, 163, 0.2);
        }
      }
    }
  }
}
</style>
