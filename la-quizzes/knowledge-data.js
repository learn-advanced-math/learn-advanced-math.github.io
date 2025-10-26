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
    "content": "满足线性方程组的所有向量的集合，相容时可写成参数形式或 $\\mathbf{x} = \\mathbf{x}_p + \\mathcal{Nul}(A)$ 的形式。"
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
  },
  {
    "keyword": "向量",
    "content": "具有大小与方向的对象，常写成列向量 $\\mathbf{v} = (v_1, \\dots, v_n)^{\\mathsf{T}}$，其加法与数乘在 $\\mathbb{R}^n$ 中按坐标逐项进行。"
  },
  {
    "keyword": "向量的加法",
    "content": "两个向量 $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n$ 的和定义为 $\\mathbf{u} + \\mathbf{v} = (u_1 + v_1, \\dots, u_n + v_n)^{\\mathsf{T}}$，几何上遵循平行四边形法则。"
  },
  {
    "keyword": "向量的标量乘法",
    "content": "标量 $c$ 与向量 $\\mathbf{v}$ 的乘积 $c\\mathbf{v}$ 通过逐坐标相乘得到 $(cv_1, \\dots, cv_n)^{\\mathsf{T}}$，几何上表示按系数 $|c|$ 缩放并在 $c<0$ 时反向。"
  },
  {
    "keyword": "向量的点积",
    "content": "对 $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n$，点积定义为 $\\mathbf{u} \\cdot \\mathbf{v} = \\sum_{i=1}^n u_i v_i = \\|\\mathbf{u}\\|\\, \\|\\mathbf{v}\\| \\cos\\theta$，用来衡量夹角与投影。"
  },
  {
    "keyword": "向量的叉积",
    "content": "三维向量 $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^3$ 的叉积 $\\mathbf{u} \\times \\mathbf{v}$ 是同时垂直于两者的向量，模长为 $\\|\\mathbf{u}\\|\\, \\|\\mathbf{v}\\| \\sin\\theta$，方向遵循右手法则，分量可由行列式公式求得。"
  },
  {
    "keyword": "矩阵与向量的乘法",
    "content": "若 $A$ 为 $m\\times n$ 矩阵且 $\\mathbf{x} \\in \\mathbb{R}^n$，则 $A\\mathbf{x}$ 的第 $i$ 个分量为 $A$ 的第 $i$ 行与 $\\mathbf{x}$ 的点积，实现线性变换 $T_A: \\mathbf{x} \\mapsto A\\mathbf{x}$。"
  },
  {
    "keyword": "线性组合",
    "content": "向量组 $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ 的线性组合形如 $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k$，系数 $c_i \\in \\mathbb{R}$，用来描述向量空间中的生成关系。"
  },
  {
    "keyword": "线性相关",
    "content": "若存在不全为零的系数 $c_1, \\dots, c_k$ 使 $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$，则向量组线性相关，意味着至少一个向量可由其余向量表示。"
  },
  {
    "keyword": "线性无关",
    "content": "仅当 $c_1 = \\cdots = c_k = 0$ 是使 $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ 的唯一选择时，向量组线性无关，表明没有冗余方向。"
  },
  {
    "keyword": "向量方程",
    "content": "将线性关系写成 $x_1\\mathbf{v}_1 + \\cdots + x_k\\mathbf{v}_k = \\mathbf{b}$ 的形式称为向量方程，从几何上分析目标向量是否位于给定向量的生成空间。"
  },
  {
    "keyword": "向量空间",
    "content": "由向量组成的集合 $V$ 在加法与标量乘法下封闭并满足八条线性代数公理（交换律、结合律、单位元、逆元、分配律等），称为向量空间。"
  },
  {
    "keyword": "生成空间",
    "content": "向量组 $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ 的生成空间 $\\operatorname{span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ 包含所有线性组合，描述了该组向量能够覆盖的子空间。"
  },
  {
    "keyword": "子空间",
    "content": "向量空间 $V$ 的非空子集 $U$ 若在向量加法与标量乘法下封闭，即 $\\mathbf{u}_1, \\mathbf{u}_2 \\in U$ 时 $\\mathbf{u}_1+\\mathbf{u}_2 \\in U$，$c\\mathbf{u}_1 \\in U$，则 $U$ 为 $V$ 的子空间。"
  },
  {
    "keyword": "零子空间",
    "content": "仅包含零向量的集合 $\\{\\mathbf{0}\\}$ 是任意向量空间的子空间，称为零子空间，维数为 $0$。"
  },
  {
    "keyword": "零空间",
    "content": "矩阵 $A$ 的零空间（核）定义为 $\\mathcal{Nul}(A) = \\{\\mathbf{x} \\mid A\\mathbf{x} = \\mathbf{0}\\}$，描述使线性变换被映射到零向量的所有向量集合。"
  },
  {
    "keyword": "列空间",
    "content": "矩阵 $A$ 的列空间 $\\mathcal{Col}(A)$ 是其列向量的生成空间，等价于线性变换 $T_A$ 的值域。其维数等于矩阵的主元列的个数，也等于矩阵的秩。"
  },
  {
    "keyword": "行空间",
    "content": "矩阵 $A$ 的行空间由行向量的所有线性组合构成，与 $A^{\\mathsf{T}}$ 的列空间相同，维数等于矩阵的秩。"
  },
  {
    "keyword": "向量空间的性质",
    "content": "向量空间满足加法交换律、加法结合律、零向量存在、加法逆元存在、标量乘法与 $1$ 的作用、标量乘法对向量加法与标量加法的分配律等八条基本公理。"
  },
  {
    "keyword": "线性无关集",
    "content": "向量空间中所有线性无关的向量集合称为线性无关集，其中任意有限子集均线性无关，为构造基和维数计算提供起点。"
  },
  {
    "keyword": "基",
    "content": "向量空间 $V$ 的基是既线性无关又生成 $V$ 的向量组，任何向量可唯一表示成对基向量的线性组合。"
  },
  {
    "keyword": "坐标系",
    "content": "为向量空间选定有序基 $B = (\\mathbf{b}_1, \\dots, \\mathbf{b}_n)$ 后即可形成坐标系，使得任意向量通过坐标向量与基之间的关系来表达。"
  },
  {
    "keyword": "坐标向量",
    "content": "基 $B$ 相对于向量 $\\mathbf{v}$ 的坐标向量记为 $[\\mathbf{v}]_B$，满足 $\\mathbf{v} = c_1\\mathbf{b}_1 + \\cdots + c_n\\mathbf{b}_n = [\\mathbf{b}_1 \\cdots \\mathbf{b}_n] [\\mathbf{v}]_B $，其中 $[\\mathbf{v}]_B = (c_1, \\dots, c_n)^{\\mathsf{T}}$。"
  },
  {
    "keyword": "维数",
    "content": "向量空间维数定义为任一基所含向量的数量，有限维时全体基的长度相同，并等于空间中最大线性无关集的规模。"
  },
  {
    "keyword": "矩阵与向量组",
    "content": "将向量组 $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ 作为矩阵列向量可用矩阵乘法表示线性组合，矩阵与向量组的联系便于统一处理方程与变换。"
  },
  {
    "keyword": "坐标变换矩阵",
    "content": "若 $B$ 与 $C$ 是同一向量空间的两组基，则存在唯一矩阵 $P_{C\\leftarrow B}$ 使 $[\\mathbf{v}]_C = P_{C\\leftarrow B}[\\mathbf{v}]_B$，称为从基 $B$ 到基 $C$ 的坐标变换矩阵。"
  },
  {
    "keyword": "过渡矩阵",
    "content": "过渡矩阵是用于表示从一个基变换到另一个基的转换关系的矩阵。设有两个基 \\( B = \\{\\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n\\} \\) 和 \\( C = \\{\\mathbf{c}_1, \\mathbf{c}_2, \\dots, \\mathbf{c}_n\\} \\)，那么从基 \\( B \\) 到基 \\( C \\) 的过渡矩阵 \\( P \\) 满足：$C = B P$。"
  }
];
