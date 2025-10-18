window.KNOWLEDGE_DATA = [
  {
    "keyword": "齐次方程组",
    "content": "所有常数项均为 $0$ 的线性方程组，任意未知量取 $0$ 总是其解，解集构成一个向量空间。"
  },
  {
    "keyword": "非齐次方程组",
    "content": "至少存在一个非零常数项的线性方程组，其解集若非空通常表示为 $\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$。"
  },
  {
    "keyword": "平凡解",
    "content": "齐次线性方程组中所有未知量均取 $0$ 的解，是任何齐次方程组必然具有的解，常写作 $\\mathbf{0}$。"
  },
  {
    "keyword": "相容",
    "content": "线性方程组至少存在一个解时称为相容，可通过增广矩阵化为阶梯形后检查是否不存在形如 $\\left[\\begin{array}{ccc|c}0 & 0 & \\cdots & 1\\end{array}\\right]$ 的矛盾行。"
  },
  {
    "keyword": "不相容",
    "content": "线性方程组没有解时称为不相容，等价于增广矩阵行化简后出现形如 $\\left[\\begin{array}{ccc|c}0 & 0 & \\cdots & 1\\end{array}\\right]$ 的矛盾。"
  },
  {
    "keyword": "系数矩阵",
    "content": "由线性方程组各未知量的系数组成的矩阵，通常记为 $A$，用于表达矩阵方程 $A\\mathbf{x} = \\mathbf{b}$。"
  },
  {
    "keyword": "增广矩阵",
    "content": "在线性方程组的系数矩阵右侧附加常数列得到的矩阵，记为 $[A\\mid\\mathbf{b}]$，用来同步记录行变换对系数和常数项的影响。"
  },
  {
    "keyword": "方程组的解集",
    "content": "满足线性方程组的所有向量的集合，相容时可写成参数形式或 $\\mathbf{x} = \\mathbf{x}_p + \\mathcal{N}(A)$ 的形式。"
  },
  {
    "keyword": "初等行变换",
    "content": "对矩阵执行的三类操作：$R_i \\leftrightarrow R_j$，$R_i \\leftarrow c R_i$（$c \\neq 0$），$R_i \\leftarrow R_i + c R_j$。用于求解方程组与化简矩阵。"
  },
  {
    "keyword": "行等价矩阵",
    "content": "可通过有限次初等行变换互相转换的两个矩阵，若存在初等矩阵 $E_k,\\dots,E_1$ 使得 $E_k\\cdots E_1 A = B$，则 $A$ 与 $B$ 行等价。"
  },
  {
    "keyword": "阶梯形",
    "content": "矩阵经过行化简后满足每一行首个非零元位置向右下方移动的形态，主元位置 $(i, j_i)$ 满足 $j_1 < j_2 < \\cdots$，便于读出主元与自由变量。"
  },
  {
    "keyword": "简化阶梯形",
    "content": "在阶梯形基础上，每个主元规范为 $1$ 且所在列其余元素为 $0$，此时矩阵处于最简行阶梯形。"
  },
  {
    "keyword": "主元",
    "content": "矩阵化为阶梯形或简化阶梯形时每行首个非零元素，记作主元（pivot），决定了基本变量的位置。"
  },
  {
    "keyword": "主元列",
    "content": "含有主元的列称为主元列，对应线性方程组中的基本变量，也对应矩阵列空间的基。"
  },
  {
    "keyword": "自由变量",
    "content": "在阶梯形中未对应主元的未知量称为自由变量，可设参数 $t_1, t_2, \\dots$ 任取，由此生成解空间。"
  },
  {
    "keyword": "基本变量",
    "content": "与主元对应的未知量称为基本变量，其取值通过行方程表示为自由变量与常数项的线性组合，如 $x_b = c + \\sum \\alpha_i t_i$。"
  },
  {
    "keyword": "向量方程",
    "content": "把线性方程组写成向量线性组合的形式 $x_1 \\mathbf{v}_1 + x_2 \\mathbf{v}_2 + \\cdots + x_n \\mathbf{v}_n = \\mathbf{b}$，用于分析列空间与解的存在。"
  },
  {
    "keyword": "矩阵方程",
    "content": "把线性方程组压缩写成矩阵方程 $A\\mathbf{x} = \\mathbf{b}$ 的形式，借助矩阵运算研究解的存在性和表示。"
  }
];
