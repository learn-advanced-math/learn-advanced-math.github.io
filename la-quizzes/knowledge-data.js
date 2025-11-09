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
  },
  {
    "keyword": "矩阵加法与标量乘法",
    "content": "若 $A, B$ 为同型 $m\\times n$ 矩阵与 $c\\in\\mathbb{R}$，定义 $(A+B)_{ij}=a_{ij}+b_{ij}$、$(cA)_{ij}=c\\,a_{ij}$。满足交换律与结合律以及分配律：$A+B=B+A$、$(A+B)+C=A+(B+C)$、$c(A+B)=cA+cB$、$(c+d)A=cA+dA$。零矩阵 $0$ 是加法单位元，$A+0=A$，$-A$ 为加法逆元使 $A+(-A)=0$。"
  },
  {
    "keyword": "矩阵乘法",
    "content": "若 $A\\in\\mathbb{R}^{m\\times n}$、$B\\in\\mathbb{R}^{n\\times p}$，则 $AB\\in\\mathbb{R}^{m\\times p}$，且 $(AB)_{ij}=\\sum_{k=1}^n a_{ik}b_{kj}$。性质：结合律 $(AB)C=A(BC)$；对加法分配 $(A+B)C=AC+BC$, $A(B+C)=AB+AC$；一般不交换 $AB\\ne BA$；与单位矩阵相容 $AI_m=A$, $I_nA=A$。矩阵乘法对应线性变换的复合。"
  },
  {
    "keyword": "矩阵转置",
    "content": "对 $A=[a_{ij}]$ 定义 $A^{\\mathsf{T}}=[a_{ji}]$。基本性质：$(A^{\\mathsf{T}})^{\\mathsf{T}}=A$，$(A+B)^{\\mathsf{T}}=A^{\\mathsf{T}}+B^{\\mathsf{T}}$，$(cA)^{\\mathsf{T}}=cA^{\\mathsf{T}}$，$(AB)^{\\mathsf{T}}=B^{\\mathsf{T}}A^{\\mathsf{T}}$。若 $A$ 为方阵，则 $\\det(A^{\\mathsf{T}})=\\det(A)$，$\\operatorname{rank}(A^{\\mathsf{T}})=\\operatorname{rank}(A)$。"
  },
  {
    "keyword": "单位矩阵",
    "content": "$I_n$ 为 $n\\times n$ 单位矩阵，主对角线为 $1$，其余为 $0$。对任意适型矩阵 $A$ 有 $AI=IA=A$。线性代数中 $I$ 扮演线性变换恒等映射的矩阵，且 $I^{-1}=I$、$I^{\\mathsf{T}}=I$。"
  },
  {
    "keyword": "零矩阵",
    "content": "全零元素的矩阵记为 $0$。性质：$A+0=A$；$0\\cdot A=A\\cdot 0=0$（当乘法适型时）；标量乘法 $c\\cdot 0=0$。零矩阵对应零线性变换 $T(\\mathbf{x})=\\mathbf{0}$。"
  },
  {
    "keyword": "对角矩阵",
    "content": "形如 $\\operatorname{diag}(d_1,\\dots,d_n)$ 的方阵，非对角线元素为 $0$。乘法与求幂按标量进行：$\\operatorname{diag}(d_i)\\operatorname{diag}(e_i)=\\operatorname{diag}(d_ie_i)$；可逆当且仅当所有 $d_i\\ne 0$，此时 $\\operatorname{diag}(d_i)^{-1}=\\operatorname{diag}(1/d_i)$；$\\det=\\prod_i d_i$。"
  },
  {
    "keyword": "三角矩阵",
    "content": "上（下）三角矩阵满足主对角线下（上）方元素全为 $0$。性质：三角矩阵相乘仍为三角矩阵；行列式等于对角线元素之积；可逆当且仅当所有对角元非零；其逆若存在同型仍为三角矩阵。"
  },
  {
    "keyword": "对称矩阵",
    "content": "实矩阵 $A$ 若满足 $A=A^{\\mathsf{T}}$ 称为对称矩阵。性质：特征值均为实数，存在正交矩阵 $Q$ 使 $A=Q\\Lambda Q^{\\mathsf{T}}$（谱定理）；二次型 $\\mathbf{x}^{\\mathsf{T}}A\\mathbf{x}$ 的几何性质与 $A$ 的正定性相关。"
  },
  {
    "keyword": "矩阵的逆",
    "content": "方阵 $A$ 可逆是指存在矩阵 $A^{-1}$ 满足 $AA^{-1}=A^{-1}A=I$。等价条件：$\\det(A)\\ne 0$；$\\operatorname{rank}(A)=n$；零空间仅含零向量；线性方程 $A\\mathbf{x}=\\mathbf{b}$ 对每个 $\\mathbf{b}$ 唯一可解。"
  },
  {
    "keyword": "矩阵的秩",
    "content": "矩阵秩定义为行空间（或列空间）的维数，等于主元个数。基本性质：$\\operatorname{rank}(A)=\\operatorname{rank}(A^{\\mathsf{T}})$；$\\operatorname{rank}(AB)\\le\\min\\{\\operatorname{rank}(A),\\operatorname{rank}(B)\\}$；对 $m\\times n$ 矩阵有 $\\dim\\mathcal{Nul}(A)=n-\\operatorname{rank}(A)$（秩-零空间定理）。"
  },
  {
    "keyword": "初等矩阵",
    "content": "对单位矩阵 $I$ 施一次初等行变换得到的矩阵称为初等矩阵 $E$。左乘 $E$ 相当于对应的行变换：$EA$。初等矩阵可逆，且其逆仍为初等矩阵（对应逆变换）。多次行变换可写成 $E_k\\cdots E_1A$。"
  },
  {
    "keyword": "逆矩阵的求法",
    "content": "常用方法：1）增广矩阵高斯-若尔当：对 $[A\\mid I]$ 做行变换化为 $[I\\mid A^{-1}]$；2）伴随矩阵公式：$A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}A$（数值上不稳定，仅理论用途）；3）分块与 Schur 补：在块可逆时用分块求逆公式。"
  },
  {
    "keyword": "分块矩阵",
    "content": "将矩阵按行列划分为若干子块进行运算。块乘法规则与普通乘法一致（尺寸相容）。常用公式：若 $A$ 可逆，则 $\\begin{bmatrix}A&B\\\\0&D\\end{bmatrix}^{-1}=\\begin{bmatrix}A^{-1}&-A^{-1}BD^{-1}\\\\0&D^{-1}\\end{bmatrix}$；若 $A$ 与 Schur 补 $S=D-CA^{-1}B$ 可逆，则 $\\begin{bmatrix}A&B\\\\C&D\\end{bmatrix}^{-1}=\\begin{bmatrix}A^{-1}+A^{-1}BS^{-1}CA^{-1}&-A^{-1}BS^{-1}\\\\-S^{-1}CA^{-1}&S^{-1}\\end{bmatrix}$。"
  },
  {
    "keyword": "LU分解",
    "content": "把方阵写成 $A=LU$，其中 $L$ 为单位下三角、$U$ 为上三角。适用于解线性方程组与求逆/行列式。对一般矩阵常需列主元部分选主元（$PA=LU$）。解 $A\\mathbf{x}=\\mathbf{b}$ 时先解 $L\\mathbf{y}=P\\mathbf{b}$ 再解 $U\\mathbf{x}=\\mathbf{y}$。"
  },
  {
    "keyword": "线性变换",
    "content": "映射 $T:V\\to W$ 线性若 $T(\\mathbf{u}+\\mathbf{v})=T(\\mathbf{u})+T(\\mathbf{v})$ 且 $T(c\\mathbf{x})=cT(\\mathbf{x})$。选定基后，存在唯一矩阵 $A$ 使 $T(\\mathbf{x})=A\\mathbf{x}$（坐标表示）。复合对应矩阵乘法，逆变换存在当且仅当矩阵可逆。核（零空间）与像（值域）满足秩-零空间定理。"
  },
  {
    "keyword": "投影变换",
    "content": "投影到子空间的线性变换 $P$ 满足幂等性 $P^2=P$。沿 $\\mathcal{N}(P)$ 投影到 $\\mathcal{R}(P)$。对正交投影到列空间 $\\mathcal{Col}(A)$，有 $P=A(A^{\\mathsf{T}}A)^{-1}A^{\\mathsf{T}}$（$A$ 满列秩），且 $P$ 对称、$\\|\\\mathbf{b}-P\\mathbf{b}\\\|$ 最小。"
  },
  {
    "keyword": "剪切变换",
    "content": "剪切（Shear）在某方向保持不变而沿另一方向平移：二维水平剪切矩阵 $\\begin{bmatrix}1&k\\\\0&1\\end{bmatrix}$、竖直剪切 $\\begin{bmatrix}1&0\\\\k&1\\end{bmatrix}$；体积（面积）不变但形状改变，$\\det=1$。剪切是线性变换，满足向量和标量乘法的线性性。"
  },
  {
    "keyword": "旋转变换",
    "content": "平面旋转角 $\\theta$ 的矩阵为 $R(\\theta)=\\begin{bmatrix}\\cos\\theta&-\\sin\\theta\\\\ \\sin\\theta&\\cos\\theta\\end{bmatrix}$，满足 $R(\\theta_1)R(\\theta_2)=R(\\theta_1+\\theta_2)$、$R(\\theta)^{\\mathsf{T}}=R(-\\theta)$、$\\det R=1$。三维旋转由正交矩阵且 $\\det=1$ 描述，可用绕坐标轴的基本旋转或 Rodrigues 公式表示。"
  },
  {
    "keyword": "伸缩变换",
    "content": "各坐标轴按比例伸缩的线性变换，矩阵通常为对角矩阵 $D=\\operatorname{diag}(s_1,\\dots,s_n)$。各方向缩放因子为 $s_i$；体积缩放因子为 $|\\det D|=\\prod_i |s_i|$；当某 $s_i=0$ 时变换不可逆并压缩到低维。"
  },
  {
    "keyword": "线性映射",
    "content": "与线性变换同义，强调从一个向量空间到另一个向量空间的线性函数。其核 $\\mathcal{N}(T)=\\{\\mathbf{x}\\mid T(\\mathbf{x})=\\mathbf{0}\\}$ 与像 $\\mathcal{R}(T)=\\{T(\\mathbf{x})\\}$ 决定了解的结构；在有限维情形下有 $\\dim\\mathcal{N}(T)+\\dim\\mathcal{R}(T)=\\dim V$。"
  },
  {
    "keyword": "单射与满射",
    "content": "线性映射 $T:\\mathbb{R}^n\\to\\mathbb{R}^m$ 单射当且仅当 $\\mathcal{N}(T)=\\{\\mathbf{0}\\}$（矩阵秩 $=n$，需 $n\\le m$）；满射当且仅当 $\\mathcal{R}(T)=\\mathbb{R}^m$（矩阵秩 $=m$，需 $n\\ge m$）。若同时单射且满射则为双射，对应矩阵可逆（方阵）。"
  }
];
