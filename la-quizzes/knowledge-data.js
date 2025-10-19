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
  },
  {
    "keyword": "二阶行列式",
    "content": "$2\\times 2$ 矩阵 $\\begin{bmatrix}a & b\\\\c & d\\end{bmatrix}$ 的行列式定义为 $\\det\\begin{bmatrix}a & b\\\\c & d\\end{bmatrix} = ad - bc$，交换两行或两列会改变符号。"
  },
  {
    "keyword": "三阶行列式",
    "content": "$3\\times 3$ 行列式可按行或列展开，也可用对角线法则：$\\det\\begin{bmatrix}a & b & c\\\\d & e & f\\\\g & h & i\\end{bmatrix} = aei + bfg + cdh - ceg - bdi - afh$。"
  },
  {
    "keyword": "对角线法则",
    "content": "对 $3\\times 3$ 行列式复制前两列后取主对角线乘积和减去副对角线乘积和，便于快速求值，俗称 Sarrus 法则。"
  },
  {
    "keyword": "余子式",
    "content": "矩阵 $A$ 中去掉第 $i$ 行第 $j$ 列后得到子矩阵的行列式叫作元素 $a_{ij}$ 的余子式，记为 $M_{ij}$。"
  },
  {
    "keyword": "代数余子式",
    "content": "元素 $a_{ij}$ 的代数余子式定义为 $C_{ij} = (-1)^{i+j} M_{ij}$，用以构造行列式展开与伴随矩阵。"
  },
  {
    "keyword": "伴随矩阵",
    "content": "$n\\times n$ 矩阵 $A$ 的伴随矩阵 $\\operatorname{adj} A$ 是代数余子式矩阵的转置，用于表示逆矩阵与高阶行列式展开。"
  },
  {
    "keyword": "伴随矩阵的行列式",
    "content": "若 $A$ 为 $n\\times n$ 矩阵，则 $\\det(\\operatorname{adj} A) = (\\det A)^{n-1}$，当 $\\det A = 0$ 时伴随矩阵的行列式也为 $0$。"
  },
  {
    "keyword": "行列式展开",
    "content": "行列式可沿任意一行或一列按代数余子式展开，称为 Laplace 展开，常用于递归计算高阶行列式。"
  },
  {
    "keyword": "特殊矩阵的行列式",
    "content": "对角矩阵与三角矩阵的行列式等于对角元素之积；置换矩阵的行列式为置换符号 $\\pm 1$，可快速得到结果。"
  },
  {
    "keyword": "逆矩阵的行列式",
    "content": "若 $A$ 可逆，则 $\\det(A^{-1}) = 1/\\det(A)$，说明行列式衡量逆矩阵的放缩程度。"
  },
  {
    "keyword": "范德蒙德行列式",
    "content": "范德蒙德矩阵 $V = [x_j^{i-1}]$ 的行列式为 $\\det(V) = \\prod_{1 \\le i < j \\le n}(x_j - x_i)$，体现了节点互异性的重要性。"
  },
  {
    "keyword": "行列式的几何意义",
    "content": "实矩阵的行列式绝对值给出线性变换对单位体积的放缩因子，符号表示空间取向是否保持。"
  },
  {
    "keyword": "行列式与线性变换",
    "content": "线性变换 $T_A$ 的行列式 $\\det(A)$ 描述体积缩放与取向变化，$\\det(A)=0$ 表示变换将空间压缩到低维。"
  },
  {
    "keyword": "行列式与向量组的线性相关性",
    "content": "列向量组成方阵时，行列式为零当且仅当列向量线性相关，因此行列式可检测向量组的独立性。"
  },
  {
    "keyword": "行列式与矩阵的逆",
    "content": "方阵 $A$ 可逆的充要条件是 $\\det(A) \\neq 0$，因此行列式为零意味着逆矩阵不存在。"
  },
  {
    "keyword": "初等变换与行列式",
    "content": "对调两行使行列式变号，某行乘以常数 $c$ 将行列式乘以 $c$，行倍加操作不改变值，这是行列式计算的基础。"
  },
  {
    "keyword": "矩阵乘积的行列式",
    "content": "对同阶方阵有 $\\det(AB) = \\det(A)\\det(B)$，揭示行列式在矩阵乘法下的乘法性。"
  },
  {
    "keyword": "转置矩阵的行列式",
    "content": "任意方阵 $A$ 满足 $\\det(A^{\\mathsf{T}}) = \\det(A)$，反映行列式与行列交换的对称性。"
  },
  {
    "keyword": "矩阵数乘的行列式",
    "content": "对 $n$ 阶方阵 $A$ 和标量 $c$，有 $\\det(cA) = c^n\\det(A)$，显示每行乘 $c$ 累积 $n$ 次。"
  },
  {
    "keyword": "逆矩阵与伴随矩阵",
    "content": "若 $\\det(A) \\neq 0$，则 $A^{-1} = \\frac{1}{\\det(A)}\\operatorname{adj} A$，伴随矩阵为求逆提供显式公式。"
  },
  {
    "keyword": "克拉默法则",
    "content": "对系数矩阵可逆的线性方程组 $A\\mathbf{x} = \\mathbf{b}$，变量 $x_i = \\dfrac{\\det(A_i)}{\\det(A)}$，其中 $A_i$ 用常数列替换第 $i$ 列获得，称为克拉默法则。"
  }
];
