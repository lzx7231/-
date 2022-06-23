const BaseTable = {
	template: `
		<el-table
		  style="width: 100%;"
      height="100%"
		  :data="tableData"
		  :row-key="rowKey"
		  :stripe="isStripe"
      :show-header="hasHeader"
		  :border="hasBorder"
		  :lazy="lazy"
		  :load="lazyLoadHandler"
		  :tree-props="treeProps">
		  <el-table-column
		    v-if="hasCheckbox"
		    align="center"
		    type="selection"
		    width="50">
		  </el-table-column>
		  <el-table-column
		    v-if="hasIndex"
		    type="index"
		    label="序号"
		    align="center"
		    width="90">
		  </el-table-column>
		  <el-table-column
		    v-for="col in formatPropColumns()"
		    :show-overflow-tooltip="tooltopWhenOverflow"
				:class-name="col.colClass"
		    :key="col.prop"
		    :type="col.type"
		    :prop="col.prop"
		    :label="col.label"
		    :align="col.cellAlign || 'center'"
		    :fixed="col.fixed"
		    :formatter="col.formatter"
		    :minWidth="col.minWidth"
		    :width="col.width">
		    <template slot-scope="scope">
		      <slot v-if="col.isSlot" :name="col.prop" :scope="scope"></slot>
		      <span v-else :style="col.styleInserted || ''">
						{{getCellValue(scope)}}
					</span>
		    </template>
		  </el-table-column>
		</el-table>
	`,
	name: 'BaseTable',
	props: {
	  // 表格数据
	  tableData: {
	    type: Array,
	    default: function () { return [] }
	  },
	  // 表格各列配置
	  columns: {
	    type: Array,
	    default: function () { return [] }
	  },
	  // row 中包含 children 字段时，被视为树形数据
	  // row 中的 hasChildren 字段来指定哪些行是包含子节点
	  // children 与 hasChildren 都可以通过 tree-props 配置。
	  treeProps: {
	    type: Object,
	    default: function () {
	      return { children: 'children', hasChildren: 'hasChildren' }
	    }
	  },
	  // 当表格数据为树形，必须要指定 rowKey
	  rowKey: {
	    type: String,
	    default: function () { return '' }
	  },
	  // 当列设置filters、filter-method属性即可开启该列的筛选，同时需为列指定columnKey
	  columnKey: {
	    type: String,
	    default: function () { return '' }
	  },
	  // 是否显示表头
	  hasHeader: {
	    type: Boolean,
	    default: function () { return true }
	  },
	  // 是否显示多选框列
	  hasCheckbox: {
	    type: Boolean,
	    default: function () { return false }
	  },
	  // 是否显示索引列
	  hasIndex: {
	    type: Boolean,
	    default: function () { return true }
	  },
	  // 是否显示纵向边框
	  hasBorder: {
	    type: Boolean,
	    default: function () { return false }
	  },
	  // 是否斑马纹形式区分行
	  isStripe: {
	    type: Boolean,
	    default: function () { return true }
	  },
	  // 是否单元格溢出省略号且hover时提示框显示所有
	  tooltopWhenOverflow: {
	    type: Boolean,
	    default: function () { return true }
	  },
	  // 自定义索引列的值
	  customIndex: {
	    type: Function,
	    default: function () {}
	  },
	  // 是否懒加载，若是需同时传入懒加载回调逻辑
	  lazy: {
	    type: Boolean,
	    default: function () { return false }
	  },
	  // 懒加载回调
	  lazyLoadHandler: {
	    type: Function,
	    default: function () {}
	  }
	},
	computed: {},
	watch: {},
	data () {
	  return {
	  }
	},
	created () {},
	mounted () {},
	methods: {
	  formatPropColumns () {
	    return this.columns.filter(col => !col.hidden)
	  },
	  getCellValue (scope) {
	    const {row, column, $index} = scope;
	    const cellValue = row[column.property];
	    return column.formatter ? column.formatter(Object.assign(scope, { cellValue })) : cellValue
	  }
	}
}