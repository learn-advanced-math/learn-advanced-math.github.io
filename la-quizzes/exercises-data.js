window.EXERCISES_DATA = [
  {
    "catalog": "线性方程组",
    "question": "判断方程组 $x + 2y - 3z = 0$, $2x - y + z = 0$ 是否齐次，并说明理由。",
    "solution": "方程组的常数项全部为 $0$，因此它是齐次方程组。齐次方程组至少含有平凡解，即 $x = y = z = 0$。",
    "keywords": ["齐次方程组", "平凡解"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "求解齐次方程组 $x + y + z = 0$；$2x + 3y + 4z = 0$；$-x - y - z = 0$，写出解集的基。",
    "solution": "将系数矩阵行化简可得两个独立方程：$x + y + z = 0$ 与 $y + 2z = 0$。令 $z = t$，则 $y = -2t$，$x = t$，因此全部解为 $t(1, -2, 1)$，解集由向量 $(1, -2, 1)$ 张成。",
    "keywords": ["齐次方程组", "方程组的解集", "自由变量"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "设矩阵 $A = \\begin{bmatrix}1 & a & 0\\\\2 & 3 & 1\\\\0 & a & 1\\end{bmatrix}$，求使齐次方程组 $A\\mathbf{x} = \\mathbf{0}$ 仅有平凡解的参数 $a$。",
    "solution": "计算 $\\det(A) = 3 - 3a$。若 $\\det(A) \\neq 0$ 即 $a \\neq 1$，则 $A$ 可逆，$A\\mathbf{x} = \\mathbf{0}$ 仅有平凡解；当 $a = 1$ 时，行列式为 $0$，出现非平凡解。",
    "keywords": ["齐次方程组", "平凡解", "系数矩阵"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "判断方程组 $x + y = 3$, $2x - y = 1$ 是否为非齐次方程组，并说明原因。",
    "solution": "常数项包含非零值 $3$ 和 $1$，因此该系统至少有一个常数项不为 $0$，是非齐次方程组。",
    "keywords": ["非齐次方程组"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "求解非齐次方程组 $x + 2y - z = 1$；$-x + y + z = 2$；$2x + y = 4$。",
    "solution": "化简得到唯一解 $x = \\frac{3}{2}$，$y = 1$，$z = \\frac{5}{2}$。因为对应系数矩阵可逆，非齐次方程组相容且解唯一。",
    "keywords": ["非齐次方程组", "方程组的解集"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "求解非齐次方程组 $x + 2y + z = 3$；$2x + 4y + 2z = 6$；$-x + y + 3z = 4$，并将解集写成特解加齐次解的形式。",
    "solution": "对增广矩阵行化简可得两个独立方程：$x + 2y + z = 3$ 与 $-x + y + 3z = 4$。以 $z$ 作为自由参数 $t$，得到 $y = \\frac{7 - 4t}{3}$，$x = -\\frac{5}{3} + \\frac{5}{3}t$。解集可写成 $(-\\frac{5}{3}, \\frac{7}{3}, 0) + t(\\frac{5}{3}, -\\frac{4}{3}, 1)$，其中第一项是特解，第二项来自对应齐次方程组的解空间。",
    "keywords": ["非齐次方程组", "方程组的解集", "自由变量"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "说明什么是齐次方程组的平凡解，并写出方程组 $x - 2y = 0$, $3x + y = 0$ 的平凡解。",
    "solution": "平凡解指所有未知量取 $0$ 的解。对该齐次方程组，平凡解为 $x = 0$, $y = 0$。",
    "keywords": ["平凡解", "齐次方程组"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "求解齐次方程组 $x - y = 0$；$2x - 2y = 0$；$y + z = 0$，并判断是否存在除平凡解以外的解。",
    "solution": "行化简后得到约束 $x = y$ 与 $z = -y$。令 $y = s$，则解为 $(s, s, -s)$。当 $s = 0$ 时得到平凡解，但对任意 $s \\neq 0$ 还存在非平凡解，因此平凡解并非唯一。",
    "keywords": ["平凡解", "自由变量", "齐次方程组"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "设矩阵 $A$ 为 $4\\times 4$ 矩阵且 $\\operatorname{rank}(A) = 4$，讨论齐次方程组 $A\\mathbf{x} = \\mathbf{0}$ 的解，并解释平凡解的地位。",
    "solution": "$\\operatorname{rank}(A) = 4$ 表明 $A$ 可逆，故零空间仅包含零向量。齐次方程组 $A\\mathbf{x} = \\mathbf{0}$ 因此只有平凡解 $\\mathbf{x} = \\mathbf{0}$，这是唯一解。",
    "keywords": ["平凡解", "主元", "齐次方程组"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "判断方程组 $x + y = 2$；$2x + 2y = 4$；$3x + 3y = 6$ 是否相容。",
    "solution": "三条方程互为倍数，不会产生矛盾。增广矩阵化简后不存在形如 $[0\\ 0\\ \\mid\\ \\text{非零}]$ 的行，故方程组相容，并有无穷多解。",
    "keywords": ["相容", "增广矩阵"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "对增广矩阵 $\\begin{bmatrix}1 & -1 & 2 & \\mid & 0\\\\0 & 3 & -6 & \\mid & 0\\\\2 & -2 & 4 & \\mid & 0\\end{bmatrix}$ 进行化简，判断对应方程组是否相容。",
    "solution": "第三行等于第一行的 $2$ 倍，常数列也保持为 $0$，因此化简后不会出现矛盾行。方程组相容，且存在自由变量。",
    "keywords": ["相容", "行等价矩阵", "初等行变换"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "考虑方程组 $x + y = 1$；$2x + ay = b$；$3x + 3y = 3$。求 $a$ 与 $b$ 满足哪些条件时方程组相容。",
    "solution": "由第一式得 $y = 1 - x$，并代入第三式得到恒等式 $3 = 3$，不引入矛盾。代入第二式得 $(2 - a)x + a = b$。若 $a \\neq 2$，可求得 $x = \\dfrac{b - a}{2 - a}$，系统相容。若 $a = 2$，则第二式化为 $2 = b$，只有当 $b = 2$ 时相容，否则不相容。",
    "keywords": ["相容", "非齐次方程组", "系数矩阵"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "判断方程组 $x + y = 1$, $x + y = 2$ 是否不相容，并给出理由。",
    "solution": "两条方程左侧完全相同但常数项不同，化简后出现矛盾行 $[0\\ 0\\ \\mid\\ 1]$，因此系统不相容。",
    "keywords": ["不相容", "增广矩阵"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "对增广矩阵 $\\begin{bmatrix}1 & 2 & \\mid & 3\\\\0 & 1 & \\mid & 4\\\\0 & 0 & \\mid & 1\\end{bmatrix}$ 判断对应方程组是否不相容。",
    "solution": "最后一行为 $[0\\ 0\\ \\mid\\ 1]$，表示 $0 = 1$ 的矛盾，故方程组不相容，没有解。",
    "keywords": ["不相容", "增广矩阵", "阶梯形"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "设方程组 $x + y + z = 1$；$2x + 2y + 2z = 2$；$ax + ay + az = 3$。确定 $a$ 取何值时系统不相容。",
    "solution": "由前两式可知 $x + y + z = 1$。代入第三式得 $a = 3$ 才能满足常数项 $3$。若 $a \\neq 3$，第三式变为 $a = 3$ 的矛盾，从而系统不相容。",
    "keywords": ["不相容", "非齐次方程组", "系数矩阵"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "写出方程组 $x - 2y + 3z = 4$；$2x + y - z = 0$ 的系数矩阵。",
    "solution": "系数矩阵由未知量系数组成，为 $\\begin{bmatrix}1 & -2 & 3\\\\2 & 1 & -1\\end{bmatrix}$。",
    "keywords": ["系数矩阵"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "系数矩阵 $A = \\begin{bmatrix}1 & 0 & -1\\\\2 & 1 & 3\\\\0 & 1 & 2\\end{bmatrix}$，求其秩并简述求解过程。",
    "solution": "对 $A$ 做行化简：$R_2 \\leftarrow R_2 - 2R_1$ 得 $[0, 1, 5]$；随后 $R_3 \\leftarrow R_3 - R_2$ 得 $[0, 0, -3]$。最终有三个主元列，$\\operatorname{rank}(A) = 3$。",
    "keywords": ["系数矩阵", "初等行变换", "主元"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "给定系数矩阵 $A = \\begin{bmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{bmatrix}$ 与常数向量 $\\mathbf{b} = (1, 2, t)^{\\mathsf{T}}$，利用秩判别法判断方程组 $A\\mathbf{x} = \\mathbf{b}$ 的相容性与解的唯一性。",
    "solution": "对增广矩阵行化简：第三行减第一行得 $[0, -1, 1 \\mid t - 1]$，再加上第二行得到 $[0, 0, 2 \\mid t + 1]$。无论 $t$ 取何值，系数矩阵与增广矩阵的秩均为 $3$，对应三个主元，因此系统对任意 $t$ 相容且解唯一。",
    "keywords": ["系数矩阵", "增广矩阵", "相容"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "写出方程组 $x + y = 2$；$2x - y = 1$ 的增广矩阵。",
    "solution": "增广矩阵在系数矩阵右侧附加常数列，得到 $\\begin{bmatrix}1 & 1 & \\mid & 2\\\\2 & -1 & \\mid & 1\\end{bmatrix}$。",
    "keywords": ["增广矩阵", "系数矩阵"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "使用增广矩阵求解方程组 $x + 2y + z = 1$；$-x + y + 2z = 0$；$2x + 3y + 3z = 2$。",
    "solution": "构造增广矩阵 $\\begin{bmatrix}1 & 2 & 1 & \\mid & 1\\\\-1 & 1 & 2 & \\mid & 0\\\\2 & 3 & 3 & \\mid & 2\\end{bmatrix}$ 并行化简：$R_2 \\leftarrow R_2 + R_1$, $R_3 \\leftarrow R_3 - 2R_1$，得到 $\\begin{bmatrix}1 & 2 & 1 & \\mid & 1\\\\0 & 3 & 3 & \\mid & 1\\\\0 & -1 & 1 & \\mid & 0\\end{bmatrix}$。继续化简为 $\\begin{bmatrix}1 & 2 & 1 & \\mid & 1\\\\0 & 1 & 1 & \\mid & \\frac{1}{3}\\\\0 & 0 & 1 & \\mid & \\frac{1}{6}\\end{bmatrix}$。回代可得 $x = \\frac{1}{2}$，$y = \\frac{1}{6}$，$z = \\frac{1}{6}$。",
    "keywords": ["增广矩阵", "初等行变换", "非齐次方程组"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "已知某线性方程组的增广矩阵经过化简后为 $\\begin{bmatrix}1 & 0 & -2 & \\mid & 3\\\\0 & 1 & 4 & \\mid & -1\\\\0 & 0 & 0 & \\mid & 0\\end{bmatrix}$，写出方程组的解集。",
    "solution": "化简矩阵显示第三行给出恒等式 $0 = 0$，说明系统相容并有一个自由变量。令 $z = t$，则 $x - 2t = 3$ 与 $y + 4t = -1$，得到解集 $\\{(3 + 2t, -1 - 4t, t) \\mid t \\in \\mathbb{R}\\}$。",
    "keywords": ["增广矩阵", "方程组的解集", "自由变量"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "解释线性方程组解集的含义，并给出方程组 $x + y = 1$, $x - y = 3$ 的解集。",
    "solution": "解集是满足全部方程的所有向量集合。解方程得 $x = 2$, $y = -1$，因此该系统的解集只包含向量 $(2, -1)$。",
    "keywords": ["方程组的解集", "非齐次方程组"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "求解方程组 $x + y + z = 0$；$y + z = 1$，并用参数描述其解集。",
    "solution": "由第二式得 $y = 1 - z$，代入第一式得到 $x = -1$。令 $z = t$，则解集为 $\\{(-1, 1 - t, t) \\mid t \\in \\mathbb{R}\\}$。",
    "keywords": ["方程组的解集", "自由变量"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "某线性方程组的解集可以写成 $(2, -1, 0) + s(1, 0, 1) + t(0, 1, -1)$，其中 $s, t \\in \\mathbb{R}$。说明该系统是非齐次还是齐次，并解释解集结构。",
    "solution": "解集包含非零常向量 $(2, -1, 0)$，因此对应的方程组为非齐次系统。任意解可写成一个特解加上齐次解空间中两个基向量的线性组合，说明其自由变量个数为 $2$。",
    "keywords": ["方程组的解集", "非齐次方程组", "自由变量"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "列举矩阵的三种初等行变换类型。",
    "solution": "初等行变换包括：(1) 交换两行；(2) 将某行乘以非零常数；(3) 将某行加上另一行的倍数。",
    "keywords": ["初等行变换"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "对矩阵 $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$ 使用初等行变换把第一列下方元素消为 $0$。",
    "solution": "可执行 $R_2 \\leftarrow R_2 - 3R_1$，得到 $\\begin{bmatrix}1 & 2\\\\0 & -2\\end{bmatrix}$。这样第一列除第一行外的元素被消为 $0$。",
    "keywords": ["初等行变换", "阶梯形"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "给定矩阵 $\\begin{bmatrix}1 & 1 & 0\\\\2 & 3 & 1\\\\1 & 0 & 1\\end{bmatrix}$，设计一系列初等行变换将其化为阶梯形矩阵并写出结果。",
    "solution": "步骤：$R_2 \\leftarrow R_2 - 2R_1$ 得 $\\begin{bmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{bmatrix}$；$R_3 \\leftarrow R_3 - R_1$ 得 $\\begin{bmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\0 & -1 & 1\\end{bmatrix}$；再执行 $R_3 \\leftarrow R_3 + R_2$ 得 $\\begin{bmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\0 & 0 & 2\\end{bmatrix}$。该结果即为阶梯形矩阵。",
    "keywords": ["初等行变换", "阶梯形", "行等价矩阵"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "什么是行等价矩阵？",
    "solution": "若两个矩阵之间可以通过有限次初等行变换相互转换，则它们行等价，表示对应线性方程组具有相同解集。",
    "keywords": ["行等价矩阵", "初等行变换"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "证明矩阵 $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$ 与 $\\begin{bmatrix}1 & 2\\\\0 & -2\\end{bmatrix}$ 行等价。",
    "solution": "对第一矩阵执行初等行变换 $R_2 \\leftarrow R_2 - 3R_1$，即可得到第二矩阵，因此两者行等价。",
    "keywords": ["行等价矩阵", "初等行变换"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "矩阵 $A$ 和 $B$ 行等价，$A$ 表示方程组 $A\\mathbf{x} = \\mathbf{b}$，$B$ 表示行化简后的矩阵。说明为什么它们具有相同的解集。",
    "solution": "初等行变换对应对方程组施加等价变换：交换方程、倍乘方程、相加方程。这些操作不会改变解集，因此行等价矩阵描述的线性方程组解集一致。",
    "keywords": ["行等价矩阵", "方程组的解集"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "判断矩阵 $\\begin{bmatrix}1 & 2 & 0\\\\0 & 1 & 3\\\\0 & 0 & 0\\end{bmatrix}$ 是否为阶梯形矩阵。",
    "solution": "每一行的首个非零元素向右移动，零行位于底部，因此该矩阵处于阶梯形。",
    "keywords": ["阶梯形"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "将矩阵 $\\begin{bmatrix}0 & 1 & 2\\\\1 & -1 & 0\\\\2 & 0 & 3\\end{bmatrix}$ 行化简为阶梯形，并指出主元位置。",
    "solution": "交换第一、第二行得到 $\\begin{bmatrix}1 & -1 & 0\\\\0 & 1 & 2\\\\2 & 0 & 3\\end{bmatrix}$。再执行 $R_3 \\leftarrow R_3 - 2R_1$，得 $\\begin{bmatrix}1 & -1 & 0\\\\0 & 1 & 2\\\\0 & 2 & 3\\end{bmatrix}$。随后 $R_3 \\leftarrow R_3 - 2R_2$，得到 $\\begin{bmatrix}1 & -1 & 0\\\\0 & 1 & 2\\\\0 & 0 & -1\\end{bmatrix}$。这是阶梯形，主元位于 $(1,1)$、$(2,2)$、$(3,3)$。",
    "keywords": ["阶梯形", "初等行变换", "主元"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "已知矩阵的阶梯形为 $\\begin{bmatrix}1 & 0 & -1 & 2\\\\0 & 1 & 3 & -4\\\\0 & 0 & 0 & 0\\end{bmatrix}$。说明对应线性方程组的自由变量个数。",
    "solution": "前两列含主元，第四列对应常数项。第三列没有主元，对应一个自由变量。因此系统有一个自由变量，解集维度为1。",
    "keywords": ["阶梯形", "自由变量", "主元"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "什么是矩阵的简化阶梯形（最简行阶梯形）？",
    "solution": "在阶梯形基础上，每个主元为1且所在列其他元素均为0的矩阵称为简化阶梯形。",
    "keywords": ["简化阶梯形", "主元"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "将矩阵 $\\begin{bmatrix}1 & 2 & 3\\\\0 & 1 & 4\\end{bmatrix}$ 化为简化阶梯形。",
    "solution": "先保持主元位置：第二行主元已为 $1$。消去第一行该列元素：$R_1 \\leftarrow R_1 - 2R_2$，得到 $\\begin{bmatrix}1 & 0 & -5\\\\0 & 1 & 4\\end{bmatrix}$，同时第一行主元已为 $1$，矩阵即为简化阶梯形。",
    "keywords": ["简化阶梯形", "初等行变换"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "对矩阵 $\\begin{bmatrix}1 & 2 & 1 & 0\\\\0 & 2 & 2 & 1\\\\0 & 0 & 1 & 3\\end{bmatrix}$ 执行初等行变换，将其化为简化阶梯形并给出结果。",
    "solution": "先令 $R_2 \\leftarrow \\tfrac{1}{2}R_2$ 得 $\\begin{bmatrix}1 & 2 & 1 & 0\\\\0 & 1 & 1 & \\tfrac{1}{2}\\\\0 & 0 & 1 & 3\\end{bmatrix}$。<br>用第三行消元：$R_2 \\leftarrow R_2 - R_3$，$R_1 \\leftarrow R_1 - R_3$，得到 $\\begin{bmatrix}1 & 2 & 0 & -3\\\\0 & 1 & 0 & -\\tfrac{5}{2}\\\\0 & 0 & 1 & 3\\end{bmatrix}$。<br>最后 $R_1 \\leftarrow R_1 - 2R_2$，得 $\\begin{bmatrix}1 & 0 & 0 & 2\\\\0 & 1 & 0 & -\\tfrac{5}{2}\\\\0 & 0 & 1 & 3\\end{bmatrix}$，即为简化阶梯形。",
    "keywords": ["简化阶梯形", "初等行变换", "主元"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "在阶梯形矩阵中，什么是主元？",
    "solution": "阶梯形矩阵每一行的第一个非零元素称为主元，用来确定基本变量的位置。",
    "keywords": ["主元", "阶梯形"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "给定阶梯形矩阵 $\\begin{bmatrix}1 & 0 & 2\\\\0 & 1 & -1\\\\0 & 0 & 0\\end{bmatrix}$，指出主元所在的行列位置。",
    "solution": "第一行主元位于第一列，第二行主元位于第二列，第三行无主元。这些主元对应未知量 $x_1$ 与 $x_2$。",
    "keywords": ["主元", "阶梯形", "基本变量"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "对矩阵 $\\begin{bmatrix}0 & 1 & 2\\\\1 & 2 & 3\\\\2 & 3 & 4\\end{bmatrix}$ 行化简以确定主元列。",
    "solution": "先交换前两行得 $\\begin{bmatrix}1 & 2 & 3\\\\0 & 1 & 2\\\\2 & 3 & 4\\end{bmatrix}$，再执行 $R_3 \\leftarrow R_3 - 2R_1$ 得 $\\begin{bmatrix}1 & 2 & 3\\\\0 & 1 & 2\\\\0 & -1 & -2\\end{bmatrix}$，随后 $R_3 \\leftarrow R_3 + R_2$ 得零行。主元出现在第一列和第二列，因此这两列是主元列。",
    "keywords": ["主元", "主元列", "初等行变换"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "什么是主元列？",
    "solution": "含有主元的列称为主元列，对应线性方程组中的基本变量，同时描述矩阵列空间的基向量。",
    "keywords": ["主元列", "主元"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "已知矩阵的简化阶梯形为 $\\begin{bmatrix}1 & 0 & 5\\\\0 & 1 & -3\\\\0 & 0 & 0\\end{bmatrix}$，指出原矩阵的主元列编号并说明其对应的变量类型。",
    "solution": "主元位于第一列和第二列，因此这两列是主元列，对应的未知量为基本变量；第三列没有主元，对应自由变量。",
    "keywords": ["主元列", "基本变量", "自由变量"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "对矩阵 $\\begin{bmatrix}1 & 2 & 3 & 4\\\\2 & 4 & 6 & 8\\\\1 & 0 & 1 & 2\\end{bmatrix}$ 行化简，确定其主元列并说明其线性代数意义。",
    "solution": "行化简步骤：$R_2 \\leftarrow R_2 - 2R_1$ 得零行；$R_3 \\leftarrow R_3 - R_1$ 得 $[0, -2, -2, -2]$，再令 $R_3 \\leftarrow -\\tfrac{1}{2}R_3$ 得 $[0, 1, 1, 1]$。随后 $R_1 \\leftarrow R_1 - 2R_3$ 得 $[1, 0, 1, 2]$。主元列为第一列与第二列，对应的列向量线性无关并张成列空间，其余列可由它们线性组合得到。",
    "keywords": ["主元列", "初等行变换", "向量方程"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "在解线性方程组时，什么是自由变量？",
    "solution": "未与主元对应的未知量称为自由变量，可以取任意参数值，从而描述解集中的自由度。",
    "keywords": ["自由变量", "主元"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "已知方程组的简化阶梯形为 $\\begin{bmatrix}1 & 0 & -2 & 3\\\\0 & 1 & 1 & -1\\\\0 & 0 & 0 & 0\\end{bmatrix}$，指出哪些未知量是自由变量并写出解的参数表示。",
    "solution": "主元位于第一列和第二列，对应未知量 $x_1$ 与 $x_2$；第三列没有主元，对应自由变量 $x_3 = t$。由行方程得 $x_1 = 2t - 3$，$x_2 = -t + 1$，因此解为 $\\{(2t - 3, -t + 1, t) \\mid t \\in \\mathbb{R}\\}$。",
    "keywords": ["自由变量", "简化阶梯形", "方程组的解集"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "一个 $5\\times 4$ 的齐次方程组经化简后 $\\operatorname{rank} = 3$。说明自由变量个数，并解释其对解空间的影响。",
    "solution": "未知量数量为 $4$，主元数量等于秩 $3$，因此存在 $4 - 3 = 1$ 个自由变量。解空间是一维的，任意解可由一个非零向量乘以参数表示。",
    "keywords": ["自由变量", "齐次方程组", "主元"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "什么是线性方程组中的基本变量？",
    "solution": "与主元列对应的未知量称为基本变量，其取值由自由变量和常数项决定。",
    "keywords": ["基本变量", "主元"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "方程组的简化阶梯形为 $\\begin{bmatrix}1 & 0 & 2 & -1\\\\0 & 1 & -3 & 4\\\\0 & 0 & 0 & 0\\end{bmatrix}$。指出基本变量和自由变量，并写出基本变量的表达式。",
    "solution": "第一、二列含主元，对应基本变量 $x_1$, $x_2$；第三列无主元，为自由变量 $x_3 = t$。方程给出 $x_1 = -1 - 2t$ 与 $x_2 = 4 + 3t$，因此基本变量随自由变量变化而确定。",
    "keywords": ["基本变量", "简化阶梯形", "自由变量"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "一个含 $4$ 个未知量的非齐次方程组经行化简后只有 $2$ 个主元。说明基本变量与自由变量的数量，并解释解集的维数。",
    "solution": "主元数量为 $2$，对应 $2$ 个基本变量；剩余 $2$ 个未知量为自由变量。解集可写成某个特解加上两个自由参数生成的平面，因此是二维仿射子空间。",
    "keywords": ["基本变量", "自由变量", "方程组的解集"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "将方程组 $x + 2y = 3$, $3x - y = 4$ 写成向量方程。",
    "solution": "可写为 $x(1, 3) + y(2, -1) = (3, 4)$，从而以列向量组合形式表达方程组。",
    "keywords": ["向量方程", "系数矩阵"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "向量方程 $x(1, 0, 1) + y(0, 1, 1) = (1, 1, 2)$ 是否存在解？若存在，求解。",
    "solution": "写出方程：$x = 1$，$y = 1$，且 $x + y = 2$。条件一致，得到解 $x = 1$, $y = 1$，因此该向量属于给定列向量的张成空间。",
    "keywords": ["向量方程", "相容"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "考虑向量方程 $x(1, 2, 0) + y(0, 1, 1) + z(1, 0, 1) = (a, 1, 2)$。求 $a$ 的取值范围以确保方程相容，并给出相应解。",
    "solution": "列出方程：$x + z = a$，$2x + y = 1$，$y + z = 2$。由第三式得 $y = 2 - z$，代入第二式得 $x = \\frac{z - 1}{2}$。再代入第一式得到 $\\frac{z - 1}{2} + z = a$，即 $3z - 1 = 2a$，故 $z = \\frac{2a + 1}{3}$。由此 $x = \\frac{a - 1}{3}$，$y = \\frac{5 - 2a}{3}$。对任意实数 $a$ 都有解，说明向量方程始终相容。",
    "keywords": ["向量方程", "相容"],
    "level": "很难"
  },
  {
    "catalog": "线性方程组",
    "question": "将方程组 $x + 2y = 3$, $3x - y = 4$ 写成矩阵方程。",
    "solution": "可写为 $\\begin{bmatrix}1 & 2\\\\3 & -1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix} = \\begin{bmatrix}3\\\\4\\end{bmatrix}$，即 $A\\mathbf{x} = \\mathbf{b}$ 的形式。",
    "keywords": ["矩阵方程", "系数矩阵"],
    "level": "简单"
  },
  {
    "catalog": "线性方程组",
    "question": "求解矩阵方程 $\\begin{bmatrix}1 & 1\\\\2 & 3\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix} = \\begin{bmatrix}1\\\\4\\end{bmatrix}$。",
    "solution": "对增广矩阵 $\\begin{bmatrix}1 & 1 & \\mid & 1\\\\2 & 3 & \\mid & 4\\end{bmatrix}$ 行化简：$R_2 \\leftarrow R_2 - 2R_1$ 得 $\\begin{bmatrix}1 & 1 & \\mid & 1\\\\0 & 1 & \\mid & 2\\end{bmatrix}$，进一步 $R_1 \\leftarrow R_1 - R_2$ 得 $\\begin{bmatrix}1 & 0 & \\mid & -1\\\\0 & 1 & \\mid & 2\\end{bmatrix}$，因此解为 $x = -1$, $y = 2$。",
    "keywords": ["矩阵方程", "增广矩阵", "初等行变换"],
    "level": "中等"
  },
  {
    "catalog": "线性方程组",
    "question": "考虑矩阵方程 $\\begin{bmatrix}1 & 2 & -1\\\\0 & 1 & 3\\\\0 & 0 & 0\\end{bmatrix}\\begin{bmatrix}x_1\\\\x_2\\\\x_3\\end{bmatrix} = \\begin{bmatrix}1\\\\4\\\\\\kappa\\end{bmatrix}$。判断在什么条件下方程相容，并给出相容时的通解。",
    "solution": "行化简得到增广矩阵 $\\begin{bmatrix}1 & 2 & -1 & \\mid & 1\\\\0 & 1 & 3 & \\mid & 4\\\\0 & 0 & 0 & \\mid & \\kappa\\end{bmatrix}$。第三行要求 $0 = \\kappa$，故只有当 $\\kappa = 0$ 时方程相容。令 $x_3 = t$，自第二行得 $x_2 = 4 - 3t$，代入第一行得 $x_1 = -7 + 7t$。通解为 $\\{(-7 + 7t, 4 - 3t, t) \\mid t \\in \\mathbb{R}\\}$。",
    "keywords": ["矩阵方程", "相容", "方程组的解集", "自由变量"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "计算二阶行列式 $\\det\\begin{bmatrix}2 & 3\\\\1 & 4\\end{bmatrix}$。",
    "solution": "应用公式 $ad - bc$，得到 $2\\cdot 4 - 3\\cdot 1 = 5$。",
    "keywords": ["二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设 $A = \\begin{bmatrix}1 & k\\\\-2 & 3\\end{bmatrix}$，求使 $\\det(A) = 0$ 的实数 $k$。",
    "solution": "二阶行列式为 $1\\cdot 3 - k(-2) = 3 + 2k$，令其为零得 $k = -\\tfrac{3}{2}$。",
    "keywords": ["二阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "平面向量 $\\mathbf{u} = (1, 2)$ 与 $\\mathbf{v} = (k, 3)$ 张成的平行四边形面积为 $7$，求 $k$。",
    "solution": "面积等于行列式绝对值 $|\\det\\begin{bmatrix}1 & 2\\\\k & 3\\end{bmatrix}| = |3 - 2k|$，令其为 $7$ 得 $3 - 2k = \\pm 7$，解得 $k = -2$ 或 $k = 5$。",
    "keywords": ["二阶行列式", "行列式的几何意义"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "计算行列式 $\\det\\begin{bmatrix}1 & 0 & 2\\\\-1 & 3 & 1\\\\0 & 2 & 1\\end{bmatrix}$。",
    "solution": "沿第一列展开得到 $1\\cdot(3\\cdot 1 - 1\\cdot 2) + (-1)\\cdot(-1)^{2+1}\\det\\begin{bmatrix}0 & 2\\\\2 & 1\\end{bmatrix} = 1 + (-4) = -3$。",
    "keywords": ["三阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设 $B = \\begin{bmatrix}1 & 2 & 0\\\\0 & t & 3\\\\1 & -1 & 2\\end{bmatrix}$，求 $\\det(B)$。",
    "solution": "沿第三列展开：$\\det(B) = 3(-1)^{2+3}\\det\\begin{bmatrix}1 & 2\\\\1 & -1\\end{bmatrix} + 2(-1)^{3+3}\\det\\begin{bmatrix}1 & 2\\\\0 & t\\end{bmatrix} = 3(-1)(-3) + 2(t) = 9 + 2t$。",
    "keywords": ["三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设 $C = \\begin{bmatrix}1 & 1 & 1\\\\1 & 2 & t\\\\1 & t & 2\\end{bmatrix}$，确定实数 $t$ 使得 $\\det(C) > 0$。",
    "solution": "沿第一行展开得 $\\det(C) = (4 - t^2) + (t - 2) + (t - 2) = -t(t - 2)$，因此 $\\det(C) > 0$ 当且仅当 $t(t - 2) < 0$，即 $0 < t < 2$。",
    "keywords": ["三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "使用对角线法则计算 $\\det\\begin{bmatrix}1 & 2 & 0\\\\0 & 3 & 1\\\\2 & 1 & 4\\end{bmatrix}$。",
    "solution": "复制前两列后按对角线法则求得 $(1\\cdot 3\\cdot 4 + 2\\cdot 1\\cdot 2 + 0) - (0 + 1\\cdot 1\\cdot 1 + 2\\cdot 0\\cdot 4) = 15$。",
    "keywords": ["对角线法则", "三阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "利用对角线法则计算 $\\det\\begin{bmatrix}a & 1 & 0\\\\0 & 2 & 3\\\\1 & 0 & 1\\end{bmatrix}$，并化简结果。",
    "solution": "套用对角线法则得 $(a\\cdot 2\\cdot 1 + 1\\cdot 3\\cdot 1 + 0) - (0 + a\\cdot 3\\cdot 1 + 1\\cdot 0\\cdot 1) = 2a + 3 - 3a = 3 - a$。",
    "keywords": ["对角线法则", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设 $A = \\begin{bmatrix}1 & t & 1\\\\0 & 1 & 2\\\\t & 0 & 1\\end{bmatrix}$，用对角线法则计算其行列式并求使结果为 $5$ 的 $t$。",
    "solution": "对角线法则给出 $\\det(A) = 1 + 2t^2 - 2t$。令其等于 $5$ 得 $2t^2 - 2t - 4 = 0$，化简为 $t^2 - t - 2 = 0$，解得 $t = 2$ 或 $t = -1$。",
    "keywords": ["对角线法则", "三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "给定矩阵 $A = \\begin{bmatrix}1 & 2 & 0\\\\3 & 4 & 5\\\\0 & -1 & 2\\end{bmatrix}$，计算元素 $a_{23}$ 的余子式 $M_{23}$。",
    "solution": "删除第二行第三列得到子矩阵 $\\begin{bmatrix}1 & 2\\\\0 & -1\\end{bmatrix}$，其行列式为 $1\\cdot(-1) - 2\\cdot 0 = -1$，因此 $M_{23} = -1$。",
    "keywords": ["余子式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $A = \\begin{bmatrix}1 & 0 & 2 & 1\\\\3 & -1 & 4 & 0\\\\0 & 2 & 1 & 1\\\\5 & 0 & 0 & 2\\end{bmatrix}$ 中，求元素 $a_{22}$ 的余子式。",
    "solution": "删除第二行第二列得到 $\\begin{bmatrix}1 & 2 & 1\\\\0 & 1 & 1\\\\5 & 0 & 2\\end{bmatrix}$，其行列式为 $1\\cdot(1\\cdot 2 - 1\\cdot 0) - 2\\cdot(0\\cdot 2 - 1\\cdot 5) + 1\\cdot(0\\cdot 0 - 1\\cdot 5) = 2 + 10 - 5 = 7$，故余子式为 $7$。",
    "keywords": ["余子式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设矩阵 $B = \\begin{bmatrix}1 & 2 & 0 & 1\\\\0 & 1 & 3 & 2\\\\2 & -1 & 1 & 0\\\\1 & 0 & t & 1\\end{bmatrix}$，求元素 $b_{24}$ 的余子式，进而确定何时该余子式为零。",
    "solution": "余子式 $M_{24}$ 为删除第二行第四列后的行列式 $\\det\\begin{bmatrix}1 & 2 & 0\\\\2 & -1 & 1\\\\1 & 0 & t\\end{bmatrix}$，计算得 $-t - 4t + 2 = -5t + 2$。令其为零得到 $t = \\tfrac{2}{5}$。",
    "keywords": ["余子式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $A = \\begin{bmatrix}1 & 2 & 0\\\\3 & 4 & 5\\\\0 & -1 & 2\\end{bmatrix}$ 中，求元素 $a_{23}$ 的代数余子式 $C_{23}$。",
    "solution": "已知 $M_{23} = -1$，代数余子式 $C_{23} = (-1)^{2+3}M_{23} = -(-1) = 1$。",
    "keywords": ["代数余子式", "余子式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "对矩阵 $B = \\begin{bmatrix}1 & 0 & 2\\\\2 & 1 & -1\\\\3 & 4 & 0\\end{bmatrix}$，计算元素 $b_{12}$ 的代数余子式。",
    "solution": "删除第一行第二列得到子矩阵 $\\begin{bmatrix}2 & -1\\\\3 & 0\\end{bmatrix}$，余子式为 $2\\cdot 0 - (-1)\\cdot 3 = 3$，因 $(-1)^{1+2} = -1$，故代数余子式为 $-3$。",
    "keywords": ["代数余子式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设 $D = \\begin{bmatrix}1 & t & 2\\\\0 & 1 & 3\\\\2 & -1 & 1\\end{bmatrix}$，求元素 $d_{23}$ 的代数余子式并找出使其为零的 $t$。",
    "solution": "余子式 $M_{23} = \\det\\begin{bmatrix}1 & t\\\\2 & -1\\end{bmatrix} = -1 - 2t$，故 $C_{23} = (-1)^{2+3}M_{23} = 1 + 2t$，令其为零得 $t = -\\tfrac{1}{2}$。",
    "keywords": ["代数余子式", "余子式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "计算矩阵 $A = \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$ 的伴随矩阵。",
    "solution": "对二阶矩阵有 $\\operatorname{adj} A = \\begin{bmatrix}4 & -2\\\\-3 & 1\\end{bmatrix}$，来自交换对角线元素并改变副对角线符号。",
    "keywords": ["伴随矩阵", "代数余子式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设 $U = \\begin{bmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\0 & 0 & 1\\end{bmatrix}$，求其伴随矩阵。",
    "solution": "由于 $U$ 为上三角矩阵且 $\\det(U) = 1$，故 $\\operatorname{adj} U = U^{-1}$。对 $U$ 做回代可得 $U^{-1} = \\begin{bmatrix}1 & -2 & 2\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{bmatrix}$，因此伴随矩阵即此。",
    "keywords": ["伴随矩阵", "逆矩阵与伴随矩阵"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "计算矩阵 $C = \\begin{bmatrix}1 & 1 & 0\\\\0 & 2 & 1\\\\2 & 1 & 1\\end{bmatrix}$ 的伴随矩阵。",
    "solution": "先求代数余子式矩阵 $\\begin{bmatrix}1 & 2 & -4\\\\-1 & 1 & 1\\\\1 & -1 & 2\\end{bmatrix}$，转置后得到 $\\operatorname{adj} C = \\begin{bmatrix}1 & -1 & 1\\\\2 & 1 & -1\\\\-4 & 1 & 2\\end{bmatrix}$。",
    "keywords": ["伴随矩阵", "代数余子式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "设 $A = \\begin{bmatrix}1 & 2\\\\3 & 5\\end{bmatrix}$，求 $\\det(\\operatorname{adj} A)$。",
    "solution": "$\\det(A) = -1$，二阶情形下 $\\det(\\operatorname{adj} A) = (\\det A)^{2-1} = -1$。直接计算 $\\operatorname{adj} A = \\begin{bmatrix}5 & -2\\\\-3 & 1\\end{bmatrix}$ 也得到行列式 $-1$。",
    "keywords": ["伴随矩阵的行列式", "伴随矩阵"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $B = \\begin{bmatrix}1 & 0 & 2\\\\0 & 1 & 1\\\\1 & 2 & 0\\end{bmatrix}$ 满足 $\\det(B) = -4$，求 $\\det(\\operatorname{adj} B)$。",
    "solution": "对 $3\\times 3$ 矩阵有 $\\det(\\operatorname{adj} B) = (\\det B)^{3-1} = (-4)^2 = 16$。",
    "keywords": ["伴随矩阵的行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $C = \\begin{bmatrix}1 & 2 & 3\\\\2 & 4 & 6\\\\0 & 1 & 1\\end{bmatrix}$ 行列式为零，求 $\\det(\\operatorname{adj} C)$ 并说明理由。",
    "solution": "由于 $\\det(C) = 0$，根据公式 $\\det(\\operatorname{adj} C) = (\\det C)^{n-1}$，可知结果也为 $0$，表明伴随矩阵不可逆。",
    "keywords": ["伴随矩阵的行列式", "行列式与矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "沿第一行展开计算 $\\det\\begin{bmatrix}0 & 1 & 2\\\\2 & 3 & 0\\\\1 & 0 & 4\\end{bmatrix}$。",
    "solution": "拉普拉斯沿第一行展开得 $(-1)^{1+2} \\cdot 1 \\cdot \\det\\begin{bmatrix}2 & 0\\\\1 & 4\\end{bmatrix} + (-1)^{1+3} \\cdot 2 \\cdot \\det\\begin{bmatrix}2 & 3\\\\1 & 0\\end{bmatrix} = -8 - 6 = -14$。",
    "keywords": ["行列式展开", "三阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "利用行列式展开沿第二列计算 $\\det\\begin{bmatrix}2 & 0 & 0 & 1\\\\0 & 3 & 0 & 0\\\\1 & 0 & 4 & 0\\\\0 & 0 & 0 & 5\\end{bmatrix}$。",
    "solution": "第二列仅有非零元素 $3$ 位于 $(2,2)$，其余为零，因此行列式为 $3 \\cdot (-1)^{2+2} \\det\\begin{bmatrix}2 & 0 & 1\\\\1 & 4 & 0\\\\0 & 0 & 5\\end{bmatrix}$。继续沿第三行展开可得 $3 \\cdot 5 \\cdot \\det\\begin{bmatrix}2 & 0\\\\1 & 4\\end{bmatrix} = 3 \\cdot 5 \\cdot 8 = 120$。",
    "keywords": ["行列式展开", "特殊矩阵的行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设 $C = \\begin{bmatrix}t & 1 & 0 & 0\\\\1 & 0 & 2 & 0\\\\0 & 3 & 1 & 1\\\\0 & 0 & 0 & 1\\end{bmatrix}$，沿最后一行展开行列式并求使其为零的 $t$。",
    "solution": "最后一行仅含元素 $1$，故 $\\det(C) = (-1)^{1+4} \\det\\begin{bmatrix}t & 1 & 0\\\\1 & 0 & 2\\\\0 & 3 & 1\\end{bmatrix}$。再次沿第一行展开得到 $t\\cdot\\det\\begin{bmatrix}0 & 2\\\\3 & 1\\end{bmatrix} - 1\\cdot\\det\\begin{bmatrix}1 & 2\\\\0 & 1\\end{bmatrix} = -6t - 1$。令其为零得 $t = -\\tfrac{1}{6}$。",
    "keywords": ["行列式展开", "三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "计算对角矩阵 $\\operatorname{diag}(2,3,4)$ 的行列式。",
    "solution": "对角矩阵的行列式等于对角线元素乘积，因此 $\\det = 2\\cdot 3\\cdot 4 = 24$。",
    "keywords": ["特殊矩阵的行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设上三角矩阵 $T = \\begin{bmatrix}a & 1 & 0\\\\0 & b & 2\\\\0 & 0 & c\\end{bmatrix}$，求 $\\det(T)$。",
    "solution": "三角矩阵的行列式为对角线乘积，故 $\\det(T) = abc$，与上三角非对角元无关。",
    "keywords": ["特殊矩阵的行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "计算循环置换矩阵 $P = \\begin{bmatrix}0 & 1 & 0\\\\0 & 0 & 1\\\\1 & 0 & 0\\end{bmatrix}$ 的行列式，并说明理由。",
    "solution": "矩阵 $P$ 表示置换 $(1\\ 2\\ 3)$，可写成两次换位的组合，故符号为 $+1$，因此 $\\det(P) = 1$。直接展开也能得到同样结果。",
    "keywords": ["特殊矩阵的行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $A = \\begin{bmatrix}2 & 1\\\\0 & 3\\end{bmatrix}$ 的逆矩阵存在，求 $\\det(A^{-1})$。",
    "solution": "$\\det(A) = 6$，因此 $\\det(A^{-1}) = 1/\\det(A) = \\tfrac{1}{6}$。",
    "keywords": ["逆矩阵的行列式", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "已知可逆矩阵 $A, B$ 满足 $\\det(A) = -3$，$\\det(B) = 4$，求 $\\det((AB)^{-1})$。",
    "solution": "利用 $\\det(AB) = \\det(A)\\det(B)$ 得 $\\det(AB) = -12$，故 $\\det((AB)^{-1}) = -\\tfrac{1}{12}$。",
    "keywords": ["逆矩阵的行列式", "矩阵乘积的行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设 $C = \\begin{bmatrix}1 & 1 & 0\\\\0 & 2 & 1\\\\0 & 0 & t\\end{bmatrix}$ 可逆，若 $\\det(C^{-1}) = \\tfrac{1}{6}$，求 $t$。",
    "solution": "$C$ 为上三角矩阵，$\\det(C) = 2t$，故 $\\det(C^{-1}) = 1/(2t) = \\tfrac{1}{6}$，解得 $t = 3$。",
    "keywords": ["逆矩阵的行列式", "特殊矩阵的行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "求节点 $0,1,2$ 构成的 $3\\times 3$ 范德蒙德行列式的值。",
    "solution": "公式给出 $\\prod_{1\\le i < j \\le 3}(x_j - x_i) = (1-0)(2-0)(2-1) = 2$。",
    "keywords": ["范德蒙德行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "对节点 $x_1 = 1$, $x_2 = 2$, $x_3 = t$ 写出范德蒙德行列式并化简结果。",
    "solution": "行列式等于 $(2-1)(t-1)(t-2) = (t-1)(t-2)$，当 $t$ 与 $1,2$ 取相同值时将退化为零。",
    "keywords": ["范德蒙德行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "计算节点 $-1, 0, 1, 2$ 生成的 $4\\times 4$ 范德蒙德行列式。",
    "solution": "乘积公式给出 $\\prod_{1 \\le i < j \\le 4}(x_j - x_i) = (0+1)(1+1)(2+1)(1-0)(2-0)(2-1) = 12$。",
    "keywords": ["范德蒙德行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "平面向量 $\\mathbf{u} = (1, 0)$ 与 $\\mathbf{v} = (0, 2)$ 张成的平行四边形面积是多少？",
    "solution": "面积等于行列式绝对值 $|\\det\\begin{bmatrix}1 & 0\\\\0 & 2\\end{bmatrix}| = 2$。",
    "keywords": ["行列式的几何意义", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "向量 $\\mathbf{u} = (1,0,0)$、$\\mathbf{v} = (0,2,0)$、$\\mathbf{w} = (1,1,3)$ 张成的平行六面体体积是多少？",
    "solution": "体积为行列式绝对值 $|\\det\\begin{bmatrix}1 & 0 & 1\\\\0 & 2 & 1\\\\0 & 0 & 3\\end{bmatrix}| = 6$。",
    "keywords": ["行列式的几何意义", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "线性变换 $T(\\mathbf{x}) = A\\mathbf{x}$ 由矩阵 $A = \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$ 给出。说明它对单位正方形面积与取向的影响。",
    "solution": "行列式 $\\det(A) = -2$，绝对值 $2$ 表明面积放大两倍，负号表示取向反转，因此单位正方形被映射为面积为 $2$ 的平行四边形并翻转方向。",
    "keywords": ["行列式的几何意义", "行列式与线性变换"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $A = \\begin{bmatrix}2 & 0\\\\0 & 3\\end{bmatrix}$ 对平面区域的面积放缩多少倍？",
    "solution": "$\\det(A) = 6$，表示任意面积被放大 $6$ 倍且取向保持。",
    "keywords": ["行列式与线性变换", "特殊矩阵的行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "线性变换 $T(\\mathbf{x}) = A\\mathbf{x}$，其中 $A = \\begin{bmatrix}1 & 1 & 0\\\\0 & 2 & 1\\\\1 & 0 & 1\\end{bmatrix}$。求 $T$ 对任意体积的放缩因子并判断是否保持取向。",
    "solution": "计算 $\\det(A) = 3$，因此体积被放大三倍且取向保持。",
    "keywords": ["行列式与线性变换", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "若 $A = \\begin{bmatrix}1 & 1\\\\2 & 2\\end{bmatrix}$，解释行列式揭示的线性变换特性。",
    "solution": "$\\det(A) = 0$，说明变换将整个平面压缩到一条直线，因而不可逆。",
    "keywords": ["行列式与线性变换", "行列式与向量组的线性相关性"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "利用行列式判断向量 $(1,0)$ 与 $(0,1)$ 是否线性无关。",
    "solution": "行列式 $\\det\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix} = 1 \\neq 0$，故两向量线性无关。",
    "keywords": ["行列式与向量组的线性相关性", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "判断向量 $(1,2,3)$、$(0,1,4)$、$(2,0,1)$ 是否线性无关，并说明理由。",
    "solution": "将向量作为列组成矩阵，行列式为 $\\det\\begin{bmatrix}1 & 0 & 2\\\\2 & 1 & 0\\\\3 & 4 & 1\\end{bmatrix} = 11 \\neq 0$，因此该向量组线性无关。",
    "keywords": ["行列式与向量组的线性相关性", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "设向量 $\\mathbf{v}_1 = (1,0,1)$、$\\mathbf{v}_2 = (2,1,t)$、$\\mathbf{v}_3 = (0,1,1)$。求使这三个向量线性相关的 $t$。",
    "solution": "行列式 $\\det\\begin{bmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\1 & t & 1\\end{bmatrix} = 3 - t$。令其为零得到 $t = 3$，此时向量组线性相关。",
    "keywords": ["行列式与向量组的线性相关性", "三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "判断矩阵 $A = \\begin{bmatrix}1 & 2\\\\3 & 5\\end{bmatrix}$ 是否可逆并说明依据。",
  "solution": "$\\det(A) = 1\\cdot 5 - 2\\cdot 3 = -1 \\neq 0$，因此 $A$ 可逆。",
    "keywords": ["行列式与矩阵的逆", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设矩阵 $A(t) = \\begin{bmatrix}1 & t & 0\\\\0 & 1 & 2\\\\1 & 0 & 1\\end{bmatrix}$，求哪些 $t$ 使得 $A(t)$ 可逆。",
    "solution": "行列式为 $\\det(A(t)) = 1 + 2t$，因此当 $t \\neq -\\tfrac{1}{2}$ 时矩阵可逆。",
    "keywords": ["行列式与矩阵的逆", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $B(t) = \\begin{bmatrix}1 & 0 & 1\\\\2 & 1 & 1\\\\1 & 1 & t\\end{bmatrix}$ 何时不可逆？",
    "solution": "行列式展开得 $\\det(B(t)) = t$，当且仅当 $t = 0$ 时为零，矩阵不可逆。",
    "keywords": ["行列式与矩阵的逆", "三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "矩阵行列式在交换两行后如何变化？举例说明。",
    "solution": "交换两行会使行列式变号。例如 $\\det\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix} = -2$，交换两行得 $\\det\\begin{bmatrix}3 & 4\\\\1 & 2\\end{bmatrix} = 2$。",
    "keywords": ["初等变换与行列式", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "对矩阵 $A = \\begin{bmatrix}1 & 0 & 2\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{bmatrix}$ 的第二行乘以 $5$，新行列式与原行列式的关系是什么？",
    "solution": "原行列式 $\\det(A) = -1$。将第二行乘以 $5$ 会使行列式乘以 $5$，因此新行列式为 $-5$。",
    "keywords": ["初等变换与行列式", "行列式展开"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $B = \\begin{bmatrix}1 & 0 & 0\\\\2 & 1 & 0\\\\3 & 4 & 1\\end{bmatrix}$ 施加行变换 $R_3 \\leftarrow R_3 - 3R_1$ 后行列式是否改变？请验证。",
    "solution": "该行变换属于行倍加，不改变行列式。原矩阵与变换后矩阵均为下三角，主对角线乘积为 $1$，行列式保持为 $1$。",
    "keywords": ["初等变换与行列式", "特殊矩阵的行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "若 $A = \\begin{bmatrix}1 & 2\\\\0 & 1\\end{bmatrix}$，$B = \\begin{bmatrix}2 & 0\\\\3 & 1\\end{bmatrix}$，计算 $\\det(AB)$。",
    "solution": "$\\det(A) = 1$，$\\det(B) = 2$，因此 $\\det(AB) = 2$。直接相乘得 $AB = \\begin{bmatrix}8 & 2\\\\3 & 1\\end{bmatrix}$，行列式同样为 $2$。",
    "keywords": ["矩阵乘积的行列式", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设可逆矩阵 $A,B$ 满足 $\\det(A) = 2$，$\\det(B) = -4$，求 $\\det(A^2 B^{-1})$。",
    "solution": "利用乘法性与逆的性质得 $\\det(A^2 B^{-1}) = (\\det A)^2 (\\det B)^{-1} = 4 \times (-\\tfrac{1}{4}) = -1$。",
    "keywords": ["矩阵乘积的行列式", "逆矩阵的行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "令 $A = \\begin{bmatrix}1 & 1 & 0\\\\0 & 2 & 1\\\\1 & 0 & 1\\end{bmatrix}$，$B = \\begin{bmatrix}2 & 0 & 1\\\\0 & 1 & 0\\\\1 & 2 & 1\\end{bmatrix}$。验证 $\\det(AB) = \\det(A)\\det(B)$。",
    "solution": "计算得 $\\det(A) = 3$，$\\det(B) = 1$。两矩阵相乘得到 $AB = \\begin{bmatrix}2 & 1 & 1\\\\1 & 4 & 1\\\\3 & 2 & 2\\end{bmatrix}$，其行列式为 $3$，与 $\\det(A)\\det(B)$ 一致。",
    "keywords": ["矩阵乘积的行列式", "三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "求矩阵 $A = \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$ 的转置行列式并与 $\\det(A)$ 比较。",
    "solution": "$\\det(A) = -2$，$A^{\\mathsf{T}} = \\begin{bmatrix}1 & 3\\\\2 & 4\\end{bmatrix}$，其行列式也为 $-2$。",
    "keywords": ["转置矩阵的行列式", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设 $A = \\begin{bmatrix}1 & 0 & t\\\\2 & 1 & 0\\\\0 & 3 & 1\\end{bmatrix}$，计算 $\\det(A)$ 与 $\\det(A^{\\mathsf{T}})$。",
    "solution": "$\\det(A) = 1 + 6t$，而 $A^{\\mathsf{T}} = \\begin{bmatrix}1 & 2 & 0\\\\0 & 1 & 3\\\\t & 0 & 1\\end{bmatrix}$ 的行列式也等于 $1 + 6t$。",
    "keywords": ["转置矩阵的行列式", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "若 $\\det(A) = 0$，说明为什么 $A^{\\mathsf{T}}$ 同样不可逆。",
    "solution": "因为 $\\det(A^{\\mathsf{T}}) = \\det(A)$，当 $\\det(A) = 0$ 时转置行列式也为零，故 $A^{\\mathsf{T}}$ 不可逆。",
    "keywords": ["转置矩阵的行列式", "行列式与矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "若 $A = \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$，求 $\\det(3A)$。",
    "solution": "对 $2\\times 2$ 矩阵有 $\\det(3A) = 3^2 \\det(A) = 9 \\times (-2) = -18$。",
    "keywords": ["矩阵数乘的行列式", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "设 $\\det(A) = 5$ 且 $A$ 为 $3\\times 3$ 矩阵，求 $\\det(-2A)$。",
    "solution": "标量倍乘性质给出 $\\det(-2A) = (-2)^3 \\det(A) = -40$。",
    "keywords": ["矩阵数乘的行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "已知 $\\det(A) = 4$ 且 $A$ 为 $3\\times 3$ 矩阵，求正实数 $c$ 使 $\\det(cA) = 1$。",
    "solution": "需满足 $c^3 \\cdot 4 = 1$，因此 $c = \\sqrt[3]{\\tfrac{1}{4}}$。",
    "keywords": ["矩阵数乘的行列式"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "利用伴随矩阵公式求 $A = \\begin{bmatrix}1 & 2\\\\3 & 5\\end{bmatrix}$ 的逆矩阵。",
  "solution": "$\\det(A) = -1$，$\\operatorname{adj} A = \\begin{bmatrix}5 & -2\\\\-3 & 1\\end{bmatrix}$，故 $A^{-1} = -\\operatorname{adj} A = \\begin{bmatrix}-5 & 2\\\\3 & -1\\end{bmatrix}$。",
    "keywords": ["逆矩阵与伴随矩阵", "伴随矩阵"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "矩阵 $C = \\begin{bmatrix}1 & 1 & 0\\\\0 & 2 & 1\\\\2 & 1 & 1\\end{bmatrix}$ 满足 $\\det(C) = 3$，已知 $\\operatorname{adj} C = \\begin{bmatrix}1 & -1 & 1\\\\2 & 1 & -1\\\\-4 & 1 & 2\\end{bmatrix}$。求 $C^{-1}$。",
    "solution": "由 $C^{-1} = \\frac{1}{\\det(C)} \\operatorname{adj} C$ 得 $C^{-1} = \\tfrac{1}{3}\\begin{bmatrix}1 & -1 & 1\\\\2 & 1 & -1\\\\-4 & 1 & 2\\end{bmatrix}$。",
    "keywords": ["逆矩阵与伴随矩阵", "伴随矩阵"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "对于 $D = \\begin{bmatrix}2 & 0 & 1\\\\1 & 1 & 0\\\\0 & 1 & 1\\end{bmatrix}$，使用伴随矩阵给出 $D^{-1}$。",
    "solution": "计算得 $\\det(D) = 3$，$\\operatorname{adj} D = \\begin{bmatrix}1 & 1 & -1\\\\-1 & 2 & 1\\\\1 & -2 & 2\\end{bmatrix}$，因此 $D^{-1} = \\tfrac{1}{3}\\begin{bmatrix}1 & 1 & -1\\\\-1 & 2 & 1\\\\1 & -2 & 2\\end{bmatrix}$。",
    "keywords": ["逆矩阵与伴随矩阵", "伴随矩阵"],
    "level": "很难"
  },
  {
    "catalog": "行列式",
    "question": "利用克拉默法则求解方程组 $2x + y = 5$, $x - y = 1$。",
    "solution": "系数矩阵行列式为 $-3$。$x$ 的分子行列式为 $-6$，得 $x = 2$；$y$ 的分子行列式为 $-3$，得 $y = 1$。",
    "keywords": ["克拉默法则", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "行列式",
    "question": "使用克拉默法则求解方程组 $\\begin{cases} x + y + z = 3,\\\\ 2x + 3y + z = 8,\\\\ x + 2y + 3z = 7.\\end{cases}$",
    "solution": "系数矩阵行列式为 $3$。常数列替换第一、二、三列所得行列式分别为 $-1$、$8$、$2$，故解为 $x = -\\tfrac{1}{3}$，$y = \\tfrac{8}{3}$，$z = \\tfrac{2}{3}$。",
    "keywords": ["克拉默法则", "三阶行列式"],
    "level": "中等"
  },
  {
    "catalog": "行列式",
    "question": "对方程组 $\\begin{cases} x + y + z = 1,\\\\ 2x + ay + z = 3,\\\\ x + 2y + az = 2 \\end{cases}$，用克拉默法则求 $x, y, z$ 的表达式。",
    "solution": "系数矩阵行列式为 $a^2 - 3a + 3$，其判别式为 $-3 < 0$，对所有实数 $a$ 非零。三个位列行列式分别为 $a^2 - 5a + 6$、$a$、$a - 3$，因此 $x = \\dfrac{a^2 - 5a + 6}{a^2 - 3a + 3}$，$y = \\dfrac{a}{a^2 - 3a + 3}$，$z = \\dfrac{a - 3}{a^2 - 3a + 3}$。",
    "keywords": ["克拉默法则", "行列式与矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "计算向量 $\\mathbf{v} = (3,-1,2)^{\\mathsf{T}}$ 的模长 $\\|\\mathbf{v}\\|$。",
    "solution": "$\\|\\mathbf{v}\\| = \\sqrt{3^2 + (-1)^2 + 2^2} = \\sqrt{14}$。",
    "keywords": ["向量"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "平面上点 $P(1,-2)$ 到 $Q(4,3)$ 的位移向量为何？请给出其列向量表示。",
    "solution": "位移向量为 $\\overrightarrow{PQ} = (4-1, 3-(-2))^{\\mathsf{T}} = (3, 5)^{\\mathsf{T}}$。",
    "keywords": ["向量"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求满足 $\\| (k,2,-1)^{\\mathsf{T}} \\| = 6$ 的实数 $k$。",
    "solution": "方程 $k^2 + 2^2 + (-1)^2 = 36$，即 $k^2 + 5 = 36$，得 $k = \\pm\\sqrt{31}$。",
    "keywords": ["向量"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "计算 $\\mathbf{u} = (1,2,0)^{\\mathsf{T}}$ 与 $\\mathbf{v} = (-3,1,4)^{\\mathsf{T}}$ 的和。",
    "solution": "$\\mathbf{u} + \\mathbf{v} = (1-3, 2+1, 0+4)^{\\mathsf{T}} = (-2, 3, 4)^{\\mathsf{T}}$。",
    "keywords": ["向量的加法"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "已知 $\\mathbf{a} = (2,-1,0)^{\\mathsf{T}}$、$\\mathbf{b} = (0,3,1)^{\\mathsf{T}}$，求 $\\mathbf{a} + 2\\mathbf{b}$。",
    "solution": "$\\mathbf{a} + 2\\mathbf{b} = (2,-1,0)^{\\mathsf{T}} + (0,6,2)^{\\mathsf{T}} = (2,5,2)^{\\mathsf{T}}$。",
    "keywords": ["向量的加法", "向量的标量乘法"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $\\mathbf{u} = (t,1,-2)^{\\mathsf{T}}$，$\\mathbf{v} = (3,-1,4)^{\\mathsf{T}}$，若 $\\mathbf{u} + 2\\mathbf{v} = (7,-1,6)^{\\mathsf{T}}$，求实数 $t$。",
    "solution": "$\\mathbf{u} + 2\\mathbf{v} = (t+6, -1, 6)^{\\mathsf{T}}$。与目标向量比较得 $t+6 = 7$，故 $t = 1$。",
    "keywords": ["向量的加法", "向量的标量乘法"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "计算 $-2(1,-3,4)^{\\mathsf{T}}$。",
    "solution": "-2(1,-3,4)^{\\mathsf{T}} = (-2,6,-8)^{\\mathsf{T}}$。",
    "keywords": ["向量的标量乘法"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在 $\\mathbb{R}^2$ 中，求标量 $c$ 使 $c(2,1)^{\\mathsf{T}}$ 的模长为 $5$。",
    "solution": "需满足 $\\|c(2,1)^{\\mathsf{T}}\\| = |c|\\sqrt{5} = 5$，故 $|c| = \\sqrt{5}$，即 $c = \\pm\\sqrt{5}$。",
    "keywords": ["向量的标量乘法", "向量"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "若 $c(1,2,1)^{\\mathsf{T}} + (0,-1,2)^{\\mathsf{T}} = (3,5,5)^{\\mathsf{T}}$，求标量 $c$。",
    "solution": "比较第一分量得 $c = 3$；第二分量 $2c - 1 = 5$，第三分量 $c + 2 = 5$ 均满足。",
    "keywords": ["向量的标量乘法", "向量的加法"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "计算 $\\mathbf{u} = (1,2,3)^{\\mathsf{T}}$ 与 $\\mathbf{v} = (0,-1,4)^{\\mathsf{T}}$ 的点积。",
    "solution": "$\\mathbf{u}\\cdot\\mathbf{v} = 1\\cdot 0 + 2\\cdot (-1) + 3\\cdot 4 = 10$。",
    "keywords": ["向量的点积"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "向量 $\\mathbf{u} = (1,0,1)^{\\mathsf{T}}$ 与 $\\mathbf{v} = (1,1,0)^{\\mathsf{T}}$ 的夹角满足 $\\cos\\theta = ?$",
    "solution": "$\\mathbf{u}\\cdot\\mathbf{v} = 1$，模长均为 $\\sqrt{2}$，故 $\\cos\\theta = \\dfrac{1}{2}$。",
    "keywords": ["向量的点积", "向量"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求实数 $t$ 使得 $(2,t,1)^{\\mathsf{T}}$ 与 $(1,-3,4)^{\\mathsf{T}}$ 正交。",
    "solution": "点积 $2\\cdot1 + t\\cdot(-3) + 1\\cdot4 = 6 - 3t$，令其为零得 $t = 2$。",
    "keywords": ["向量的点积"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "计算标准基向量的叉积 $\\mathbf{e}_1 \\times \\mathbf{e}_2$。",
    "solution": "$\\mathbf{e}_1 \\times \\mathbf{e}_2 = (1,0,0)^{\\mathsf{T}} \\times (0,1,0)^{\\mathsf{T}} = (0,0,1)^{\\mathsf{T}}$。",
    "keywords": ["向量的叉积"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "利用叉积求向量 $\\mathbf{u} = (2,1,0)^{\\mathsf{T}}$ 与 $\\mathbf{v} = (1,3,0)^{\\mathsf{T}}$ 张成的平行四边形面积。",
    "solution": "$\\mathbf{u} \\times \\mathbf{v} = (0,0,5)^{\\mathsf{T}}$，面积为模长 $\\|\\mathbf{u} \\times \\mathbf{v}\\| = 5$。",
    "keywords": ["向量的叉积"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $\\mathbf{u} = (1,2,-1)^{\\mathsf{T}}$，$\\mathbf{v} = (t,1,1)^{\\mathsf{T}}$，求 $t$ 使得 $\\mathbf{u} \\times \\mathbf{v}$ 的第三个分量等于 $4$。",
    "solution": "叉积 $\\mathbf{u} \\times \\mathbf{v} = (3, -(1 + t), 1 - 2t)^{\\mathsf{T}}$，令第三分量 $1 - 2t = 4$ 得 $t = -\\tfrac{3}{2}$。",
    "keywords": ["向量的叉积"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "计算 $A\\mathbf{x}$，其中 $A = \\begin{bmatrix}1 & 2\\\\-1 & 3\\\\0 & 4\\end{bmatrix}$，$\\mathbf{x} = (2,-1)^{\\mathsf{T}}$。",
    "solution": "$A\\mathbf{x} = (0, -5, -4)^{\\mathsf{T}}$。",
    "keywords": ["矩阵与向量的乘法"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "已知 $A = \\begin{bmatrix}0 & -1\\\\1 & 0\\end{bmatrix}$ 表示平面旋转 $90^{\\circ}$，求 $A^2 (1,0)^{\\mathsf{T}}$。",
    "solution": "$A(1,0)^{\\mathsf{T}} = (0,1)^{\\mathsf{T}}$，再次作用得 $A^2 (1,0)^{\\mathsf{T}} = (-1,0)^{\\mathsf{T}}$。",
    "keywords": ["矩阵与向量的乘法", "向量"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $A = \\begin{bmatrix}1 & t & 0\\\\0 & 2 & 1\\\\1 & 0 & 1\\end{bmatrix}$，$\\mathbf{x} = (1,-1,2)^{\\mathsf{T}}$。若 $A\\mathbf{x} = (0,0,3)^{\\mathsf{T}}$，求 $t$。",
    "solution": "第一分量为 $1 - t$，令其等于 $0$ 得 $t = 1$，此时其余分量分别为 $-2 + 2 = 0$ 与 $1 + 2 = 3$，与目标一致。",
    "keywords": ["矩阵与向量的乘法"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "写出向量 $(5,7)^{\\mathsf{T}}$ 作为 $\\mathbf{e}_1 = (1,0)^{\\mathsf{T}}$ 与 $\\mathbf{e}_2 = (0,1)^{\\mathsf{T}}$ 的线性组合。",
    "solution": "$(5,7)^{\\mathsf{T}} = 5\\mathbf{e}_1 + 7\\mathbf{e}_2$。",
    "keywords": ["线性组合"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求系数 $a,b$ 使 $(1,2,3)^{\\mathsf{T}} = a(1,0,1)^{\\mathsf{T}} + b(0,1,1)^{\\mathsf{T}}$。",
    "solution": "比较得到 $a = 1$，$b = 2$，第三分量检验 $1 + 2 = 3$ 成立。",
    "keywords": ["线性组合"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $\\mathbf{v} = (2,1,4)^{\\mathsf{T}}$，判断是否存在系数 $c_1,c_2,c_3$ 使 $\\mathbf{v} = c_1(1,0,1)^{\\mathsf{T}} + c_2(0,1,1)^{\\mathsf{T}} + c_3(1,1,0)^{\\mathsf{T}}$，并求出一组解。",
    "solution": "解方程组 $c_1 + c_3 = 2$，$c_2 + c_3 = 1$，$c_1 + c_2 = 4$，得 $c_3 = -\\tfrac{1}{2}$，$c_1 = \\tfrac{5}{2}$，$c_2 = \\tfrac{3}{2}$。",
    "keywords": ["线性组合", "向量方程"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断向量 $(1,2)^{\\mathsf{T}}$ 与 $(2,4)^{\\mathsf{T}}$ 是否线性相关。",
    "solution": "第二个向量等于 $2$ 倍第一个，存在非零系数使组合为零，因此线性相关。",
    "keywords": ["线性相关"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "验证向量 $(1,0,1)^{\\mathsf{T}}$、$(0,1,1)^{\\mathsf{T}}$、$(1,1,2)^{\\mathsf{T}}$ 是否线性相关。",
    "solution": "有 $(1,1,2)^{\\mathsf{T}} = (1,0,1)^{\\mathsf{T}} + (0,1,1)^{\\mathsf{T}}$，故三向量线性相关。",
    "keywords": ["线性相关", "线性组合"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求 $t$ 使向量 $(1,2,3)^{\\mathsf{T}}$、$(2,1,0)^{\\mathsf{T}}$、$(t,3,3)^{\\mathsf{T}}$ 线性相关。",
    "solution": "对应行列式 $9 - 3t = 0$，得 $t = 3$。",
    "keywords": ["线性相关", "行列式与向量组的线性相关性"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断向量 $(1,0)^{\\mathsf{T}}$ 与 $(0,1)^{\\mathsf{T}}$ 是否线性无关。",
    "solution": "只有零组合 $c_1(1,0)^{\\mathsf{T}} + c_2(0,1)^{\\mathsf{T}} = (0,0)^{\\mathsf{T}}$ 时 $c_1=c_2=0$，故线性无关。",
    "keywords": ["线性无关"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断向量 $(1,0,1)^{\\mathsf{T}}$、$(0,1,1)^{\\mathsf{T}}$、$(1,1,0)^{\\mathsf{T}}$ 是否线性无关。",
    "solution": "对应矩阵行列式为 $-2 \\neq 0$，故三向量线性无关。",
    "keywords": ["线性无关", "行列式与向量组的线性相关性"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求 $t$ 使得向量 $(1,0,0)^{\\mathsf{T}}$、$(0,1,0)^{\\mathsf{T}}$、$(1,1,t)^{\\mathsf{T}}$ 线性无关。",
    "solution": "行列式为 $t$，当且仅当 $t \\neq 0$ 时线性无关。",
    "keywords": ["线性无关", "行列式与向量组的线性相关性"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "把方程组 $\\left\\{\\begin{array}{l}x + 2y = 3 \\\\ 4x -7y = 1 \\end{array}\\right.$ 写成向量方程。",
    "solution": "向量方程为 $x(1,4)^{\\mathsf{T}} + y(2,-7)^{\\mathsf{T}} = (3,1)^{\\mathsf{T}}$。",
    "keywords": ["向量方程", "线性组合"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断 $\\mathbf{b} = (2,3,5)^{\\mathsf{T}}$ 是否满足向量方程 $x(1,0,2)^{\\mathsf{T}} + y(0,1,1)^{\\mathsf{T}} = \\mathbf{b}$。",
    "solution": "解方程组得 $x = 2$, $y = 3$，第三分量检验 $2\\cdot2 + 3 = 7 \\neq 5$，故无解，$\\mathbf{b}$ 不在生成空间中。",
    "keywords": ["向量方程", "线性无关"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求 $t$ 使向量方程 $x(1,1,0)^{\\mathsf{T}} + y(0,1,1)^{\\mathsf{T}} = (2,t,3)^{\\mathsf{T}}$ 有解，并给出一组解。",
    "solution": "从第一分量得 $x = 2$，第三分量给出 $y = 3$，第二分量要求 $x + y = t$，故 $t = 5$，解为 $(x,y) = (2,3)$。",
    "keywords": ["向量方程", "线性组合"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断集合 $V = \\mathbb{R}^2$ 在常规加法与标量乘法下是否构成向量空间，并说明理由。",
    "solution": "$V$ 对加法与数乘封闭且满足八条向量空间公理，因此是向量空间。",
    "keywords": ["向量空间", "向量空间的性质"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "集合 $W = \\{(x,y)^{\\mathsf{T}} \\mid x + y = 0\\}$ 在 $\\mathbb{R}^2$ 的标准运算下是否为向量空间？",
    "solution": "集合 $W$ 在加法与标量乘法下封闭且包含零向量 $(0,0)^{\\mathsf{T}}$，满足公理，因此构成向量空间。",
    "keywords": ["向量空间", "子空间"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "定义集合 $U = \\mathbb{R}^2$，加法保持不变，但标量乘法改为 $c \\odot (x,y) = (cx, y)$。问 $(U,+,\\odot)$ 是否是向量空间？",
    "solution": "取任意 $(x,y)$，$0 \\odot (x,y) = (0,y)$，若 $y \\neq 0$ 则不等于零向量，违背标量乘以零的公理，因此不是向量空间。",
    "keywords": ["向量空间", "向量空间的性质"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求向量 $(3,3)^{\\mathsf{T}}$ 是否属于 $\\operatorname{span}\\{(1,0)^{\\mathsf{T}}, (1,1)^{\\mathsf{T}}\\}$。",
    "solution": "解 $a(1,0)^{\\mathsf{T}} + b(1,1)^{\\mathsf{T}} = (3,3)^{\\mathsf{T}}$ 得 $b = 3$，$a = 0$，故属于该生成空间。",
    "keywords": ["生成空间", "线性组合"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $S = \\{(1,2,0)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,3,1)^{\\mathsf{T}}\\}$，求 $\\operatorname{span}(S)$ 的维数。",
    "solution": "对应矩阵秩为 $2$，故生成空间维数为 $2$。",
    "keywords": ["生成空间", "维数"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "向量组 $\\{(1,0,1)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (t,1,2)^{\\mathsf{T}}\\}$ 的生成空间等于 $\\mathbb{R}^3$ 需满足什么条件？",
    "solution": "行列式 $1 - t$ 非零才能生成全部空间，故 $t \\neq 1$。",
    "keywords": ["生成空间", "线性无关"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "集合 $U = \\{k(1,2,3)^{\\mathsf{T}} \\mid k \\in \\mathbb{R}\\}$ 是否为 $\\mathbb{R}^3$ 的子空间？",
    "solution": "对加法和标量乘法封闭并包含零向量，故是子空间。",
    "keywords": ["子空间"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "证明集合 $W = \\{(x,y,z)^{\\mathsf{T}} \\mid x + y + z = 0\\}$ 是 $\\mathbb{R}^3$ 的子空间。",
    "solution": "满足齐次线性方程，闭合于加法和标量乘法且含零向量，故为子空间。",
    "keywords": ["子空间", "向量空间的性质"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $S_t = \\{(x,y,z)^{\\mathsf{T}} \\mid x + ty = z\\}$。对哪些 $t$，集合 $S_t$ 构成子空间？",
    "solution": "该条件等价于齐次线性方程，对任意 $t$ 都满足子空间要求。",
    "keywords": ["子空间", "生成空间"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "写出 $\\mathbb{R}^4$ 的零子空间，并说明其维数。",
    "solution": "零子空间为 $\\{(0,0,0,0)^{\\mathsf{T}}\\}$，维数为 $0$。",
    "keywords": ["零子空间"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "若线性变换 $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ 可逆，求其零子空间。",
    "solution": "可逆变换的核只有零向量，因此零子空间即 $\\{\\mathbf{0}\\}$。",
    "keywords": ["零子空间", "线性无关"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "证明对任意向量空间 $V$，零子空间是唯一维数为 $0$ 的子空间。",
    "solution": "若 $U$ 的维数为 $0$，其基为空集，只能包含零向量；反之零子空间显然维数 $0$，故唯一。",
    "keywords": ["零子空间", "维数"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求矩阵 $A = \\begin{bmatrix}1 & 2\\\\2 & 4\\end{bmatrix}$ 的零空间。",
    "solution": "行化简得方程 $x_1 + 2x_2 = 0$，令 $x_2 = t$，零空间为 $t(-2,1)^{\\mathsf{T}}$。",
    "keywords": ["零空间", "自由变量"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求矩阵 $B = \\begin{bmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\0 & 0 & 0\\end{bmatrix}$ 的零空间基。",
    "solution": "解得 $x_3 = s$，$x_2 = -s$，$x_1 = s$，基为 $\\{(1,-1,1)^{\\mathsf{T}}\\}$。",
    "keywords": ["零空间", "线性组合"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $A_t = \\begin{bmatrix}1 & 0 & t\\\\0 & 1 & 1\\\\0 & 0 & 0\\end{bmatrix}$。求 $t$ 使零空间维数至少为 $2$。",
    "solution": "矩阵秩恒为 $2$，零空间维数为 $1$，因此不存在满足条件的 $t$。",
    "keywords": ["零空间", "维数"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断 $\\mathbf{b} = (1,3,4)^{\\mathsf{T}}$ 是否在矩阵 $A = \\begin{bmatrix}1 & 0\\\\2 & 1\\\\0 & 1\\end{bmatrix}$ 的列空间中。",
    "solution": "求解 $A\\mathbf{x} = \\mathbf{b}$，第三行得 $x_2 = 4$，第一行得 $x_1 = 1$，第二行给出 $2\\cdot1 + 4 = 6 \\neq 3$，故 $\\mathbf{b}$ 不在列空间。",
    "keywords": ["列空间", "矩阵与向量的乘法"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "给出矩阵 $C = \\begin{bmatrix}1 & 2 & 3\\\\0 & 1 & 1\\\\1 & 3 & 4\\end{bmatrix}$ 的列空间一组基。",
    "solution": "行化简表明第 $1$、第 $2$ 列为主元列，基可取 $\\{(1,0,1)^{\\mathsf{T}}, (2,1,3)^{\\mathsf{T}}\\}$。",
    "keywords": ["列空间", "主元列"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $A_t = \\begin{bmatrix}1 & t & 0\\\\0 & 1 & 1\\\\1 & 1 & 1\\end{bmatrix}$。求使列空间维数为 $2$ 的 $t$。",
    "solution": "对 $A_t$ 进行行化简，$A_t = \\begin{bmatrix}1 & t & 0\\\\0 & 1 & 1\\\\1 & 1 & 1\\end{bmatrix}$ $\\rightarrow$ $\\begin{bmatrix}1 & 0 & 0\\\\0 & 1 & 1\\\\0 & t & 0\\end{bmatrix}$。当 $t = 0$ 时，有两个主元列，列空间的维数为 $2$。",
    "keywords": ["列空间", "维数", "主元"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求矩阵 $A = \\begin{bmatrix}1 & 2 & 3\\\\2 & 4 & 6\\end{bmatrix}$ 的行空间基。",
    "solution": "行化简得到 $\\begin{bmatrix}1 & 2 & 3\\\\0 & 0 & 0\\end{bmatrix}$，基向量为 $(1,2,3)$。",
    "keywords": ["行空间", "阶梯形"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "矩阵 $B = \\begin{bmatrix}1 & 0 & 1 & 0\\\\0 & 1 & 1 & 1\\\\1 & 1 & 2 & 1\\end{bmatrix}$ 的行空间维数是多少？",
    "solution": "行化简后存在两行主元，故维数为 $2$。",
    "keywords": ["行空间", "维数"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "对矩阵 $A_t = \\begin{bmatrix}1 & 2 & t\\\\0 & 1 & 1\\\\1 & 2 & t+1\\end{bmatrix}$，求行空间维数并说明是否依赖于 $t$。",
    "solution": "行列式恒为 $1$，秩为 $3$，行空间维数固定为 $3$。",
    "keywords": ["行空间", "维数"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "验证在 $\\mathbb{R}^3$ 中，向量加法满足交换律：给出 $(1,2,0)^{\\mathsf{T}} + (3,-1,4)^{\\mathsf{T}}$ 与反向相加的结果。",
    "solution": "两次相加均得 $(4,1,4)^{\\mathsf{T}}$，说明交换律成立。",
    "keywords": ["向量空间的性质", "向量的加法"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在 $\\mathbb{R}^2$ 中验证加法逆元性质：求向量 $(2,-5)^{\\mathsf{T}}$ 的相反向量并检验其和。",
    "solution": "相反向量为 $(-2,5)^{\\mathsf{T}}$，两者相加得零向量 $(0,0)^{\\mathsf{T}}$。",
    "keywords": ["向量空间的性质", "向量"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "给定运算 $(x,y) \\oplus (u,v) = (x+u, y+v)$，$c \\odot (x,y) = (cx, cy + 1)$。说明哪些向量空间公理被破坏。",
    "solution": "取任意 $(x,y)$，$0 \\odot (x,y) = (0,1)$，不等于零向量；同时分配律 $c \\odot ((x,y) \\oplus (u,v))$ 与 $(c \\odot (x,y)) \\oplus (c \\odot (u,v))$ 的第二分量不同，故违反向量空间公理。",
    "keywords": ["向量空间的性质"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断集合 $\\{(1,0,0)^{\\mathsf{T}}, (0,1,0)^{\\mathsf{T}}, (0,0,1)^{\\mathsf{T}}\\}$ 是否为线性无关集。",
    "solution": "该集合为标准基，线性无关。",
    "keywords": ["线性无关集"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在平面 $\\mathbb{R}^2$ 中，线性无关集最多包含多少个向量？请说明原因。",
    "solution": "最多 $2$ 个，因为维数为 $2$，任意 $3$ 个向量必线性相关。",
    "keywords": ["线性无关集", "维数"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "给定集合 $S = \\{(1,1,0)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,2,1)^{\\mathsf{T}}, (2,3,1)^{\\mathsf{T}}\\}$。构造一个包含最多向量的线性无关子集。",
    "solution": "行化简可得前三个向量线性无关，第四个向量 $= (1,1,0)^{\\mathsf{T}} + (1,2,1)^{\\mathsf{T}}$，故可取子集 $\\{(1,1,0)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,2,1)^{\\mathsf{T}}\\}$。",
    "keywords": ["线性无关集", "主元列"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "判断向量 $\\{(1,0)^{\\mathsf{T}}, (1,1)^{\\mathsf{T}}\\}$ 是否构成 $\\mathbb{R}^2$ 的一组基。",
    "solution": "二者线性无关且数量为 $2$，等于维数，故构成基。",
    "keywords": ["基", "线性无关"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求子空间 $U = \\{(x,y,z)^{\\mathsf{T}} \\mid x + y + z = 0\\}$ 的一组基。",
    "solution": "令 $y = s$, $z = t$，则 $x = -s - t$，基可取 $\\{(-1,1,0)^{\\mathsf{T}}, (-1,0,1)^{\\mathsf{T}}\\}$。",
    "keywords": ["基", "子空间"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "已知向量组 $\\{(1,0,1)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}\\}$ 张成一个子空间。添加哪个向量可扩展为 $\\mathbb{R}^3$ 的基？",
    "solution": "加入与前两向量线性独立的 $(0,0,1)^{\\mathsf{T}}$ 即可组成基。",
    "keywords": ["基", "线性无关集"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在基 $B = \\{(1,0)^{\\mathsf{T}}, (1,1)^{\\mathsf{T}}\\}$ 下求向量 $(3,5)^{\\mathsf{T}}$ 的坐标。",
    "solution": "解得 $[ (3,5)^{\\mathsf{T}} ]_B = (-2,5)^{\\mathsf{T}}$。",
    "keywords": ["坐标系", "坐标向量"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "基 $B = \\{(1,0,0)^{\\mathsf{T}}, (1,1,0)^{\\mathsf{T}}, (1,1,1)^{\\mathsf{T}}\\}$，求向量 $(2,3,1)^{\\mathsf{T}}$ 的坐标。",
    "solution": "由第三分量得 $c_3 = 1$，第二分量得 $c_2 = 2$，第一分量得 $c_1 = -1$，故坐标为 $(-1,2,1)^{\\mathsf{T}}$。",
    "keywords": ["坐标系", "基"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在基 $B = \\{(1,1,0)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,0,1)^{\\mathsf{T}}\\}$ 中找出与标准基坐标 $(2,0,1)^{\\mathsf{T}}$ 对应的坐标向量。",
    "solution": "解得 $c_1 = \\tfrac{1}{2}$，$c_2 = -\\tfrac{1}{2}$，$c_3 = \\tfrac{3}{2}$，故坐标向量为 $(\\tfrac{1}{2}, -\\tfrac{1}{2}, \\tfrac{3}{2})^{\\mathsf{T}}$。",
    "keywords": ["坐标系", "坐标向量"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在基 $B = \\{(1,0)^{\\mathsf{T}}, (0,1)^{\\mathsf{T}}\\}$ 下，向量 $(4,-3)^{\\mathsf{T}}$ 的坐标向量是多少？",
    "solution": "直接为 $(4,-3)^{\\mathsf{T}}$。",
    "keywords": ["坐标向量", "坐标系"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "已知 $[\\mathbf{v}]_B = (2,-1)^{\\mathsf{T}}$，其中 $B = \\{(1,1)^{\\mathsf{T}}, (1,-1)^{\\mathsf{T}}\\}$，求 $\\mathbf{v}$。",
    "solution": "$\\mathbf{v} = 2(1,1)^{\\mathsf{T}} - (1,-1)^{\\mathsf{T}} = (1,3)^{\\mathsf{T}}$。",
    "keywords": ["坐标向量", "线性组合"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在基 $B = \\{(1,0,1)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,1,0)^{\\mathsf{T}}\\}$ 下向量 $\\mathbf{v}$ 的坐标为 $(1,2,0)^{\\mathsf{T}}$。求 $\\mathbf{v}$ 在标准基下的表示。",
    "solution": "$\\mathbf{v} = (1,0,1)^{\\mathsf{T}} + 2(0,1,1)^{\\mathsf{T}} = (1,2,3)^{\\mathsf{T}}$。",
    "keywords": ["坐标向量", "线性组合"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求向量空间 $\\mathbb{R}^5$ 的维数。",
    "solution": "标准基有 $5$ 个向量，故维数为 $5$。",
    "keywords": ["维数"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "矩阵 $A = \\begin{bmatrix}1 & 1 & 0 & 0\\\\0 & 1 & 1 & 0\\\\0 & 0 & 1 & 1\\end{bmatrix}$ 的零空间维数是多少？",
    "solution": "秩为 $3$，未知量 $4$ 个，零空间维数为 $1$。",
    "keywords": ["维数", "零空间"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $V_t = \\{(x,y,z)^{\\mathsf{T}} \\mid x + y + z = 0,\\ x + ty = 0\\}$。求 $t$ 与 $V_t$ 维数的关系。",
    "solution": "$V_t$ 实际上是齐次方程 $A \\mathbf{x} = \\mathbf{0}$ 中系数矩阵 $A$ 的零空间。对 $A$ 进行行化简，可以看出，不论 $t$ 取何值，$A$ 的秩都为 $2$，因此 $V_t$ 的维数为 $1$。",
    "keywords": ["维数", "子空间", "零空间"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "将向量组 $\\{(1,2)^{\\mathsf{T}}, (3,4)^{\\mathsf{T}}\\}$ 组合成矩阵并写出其与系数向量 $(a,b)^{\\mathsf{T}}$ 的乘积。",
    "solution": "矩阵 $A = \\begin{bmatrix}1 & 3\\\\2 & 4\\end{bmatrix}$，乘积为 $(a + 3b, 2a + 4b)^{\\mathsf{T}}$。",
    "keywords": ["矩阵与向量组", "矩阵与向量的乘法"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "设 $V = \\{(1,0,1)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,1,0)^{\\mathsf{T}}\\}$，写出矩阵 $A$ 的列为该向量组并计算 $A(2,-1,1)^{\\mathsf{T}}$。",
    "solution": "矩阵 $A = \\begin{bmatrix}1 & 0 & 1\\\\0 & 1 & 1\\\\1 & 1 & 0\\end{bmatrix}$，乘积结果为 $(3,0,1)^{\\mathsf{T}}$。",
    "keywords": ["矩阵与向量组", "线性组合"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "若矩阵 $A$ 的列为 $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$，且 $A\\mathbf{x} = (2,3,1)^{\\mathsf{T}}$ 在 $\\mathbf{x} = (1,1,0)^{\\mathsf{T}}$ 时成立。说明 $(2,3,1)^{\\mathsf{T}}$ 与向量组的关系。",
    "solution": "该向量等于 $\\mathbf{v}_1 + \\mathbf{v}_2$，因此属于列向量的生成空间。",
    "keywords": ["矩阵与向量组", "线性组合"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "在 $\\mathbb{R}^2$ 中，基 $B = \\{(1,0)^{\\mathsf{T}}, (1,1)^{\\mathsf{T}}\\}$ 与标准基 $E$ 之间的坐标变换矩阵 $P_{E\\leftarrow B}$ 是多少？",
    "solution": "$P_{E\\leftarrow B} = \\begin{bmatrix}1 & 1\\\\0 & 1\\end{bmatrix}$。",
    "keywords": ["坐标变换矩阵", "坐标系"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "已知 $P_{E\\leftarrow B} = \\begin{bmatrix}2 & 1\\\\1 & 1\\end{bmatrix}$，求基 $B$ 下坐标 $(3,-1)^{\\mathsf{T}}$ 所代表的标准坐标。",
    "solution": "标准坐标为 $P_{E\\leftarrow B}(3,-1)^{\\mathsf{T}} = (5,2)^{\\mathsf{T}}$。",
    "keywords": ["坐标变换矩阵", "坐标向量"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "基 $B = \\{(1,0,1)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,1,0)^{\\mathsf{T}}\\}$ 与 $C = \\{(1,1,1)^{\\mathsf{T}}, (1,0,0)^{\\mathsf{T}}, (0,1,0)^{\\mathsf{T}}\\}$。求坐标变换矩阵 $P_{C\\leftarrow B}$。",
    "solution": "由 $[\\mathbf{x}]_C = P_{C\\leftarrow B} [\\mathbf{x}]_B$ 和 $C [\\mathbf{x}]_C = B [\\mathbf{x}]_B$，得 $P_{C\\leftarrow B} = C^{-1}B$。<br>行化简 $[C \\quad B] \\rightarrow [I \\quad C^{-1}B]$，<br>得 $P_{C\\leftarrow B} = \\begin{bmatrix}1 & 1 & 0\\\\0 & -1 & 1\\\\-1 & 0 & 1\\end{bmatrix}$。",
    "keywords": ["坐标变换矩阵"],
    "level": "很难"
  },
  {
    "catalog": "向量与向量空间",
    "question": "基 $B = \\{(1,0,1)^{\\mathsf{T}}, (0,1,1)^{\\mathsf{T}}, (1,1,0)^{\\mathsf{T}}\\}$ 与 $C = \\{(1,1,1)^{\\mathsf{T}}, (1,0,0)^{\\mathsf{T}}, (0,1,0)^{\\mathsf{T}}\\}$。求由 $B$ 到 $C$ 的过渡矩阵。",
    "solution": "由 $C = B P$，得 $P = B^{-1}C = \\begin{bmatrix}1/2 & 1/2 & -1/2\\\\1/2 & -1/2 & 1/2\\\\1/2 & 1/2 & 1/2\\end{bmatrix}$",
    "keywords": ["过渡矩阵"],
    "level": "简单"
  },
  {
    "catalog": "向量与向量空间",
    "question": "已知 $P_{B\\leftarrow E} = \\begin{bmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\0 & 0 & 1\\end{bmatrix}$，$P_{C\\leftarrow B} = \\begin{bmatrix}1 & 0 & 1\\\\0 & 1 & -1\\\\1 & 0 & 0\\end{bmatrix}$。求 $P_{C\\leftarrow E}$。",
    "solution": "两矩阵相乘得 $P_{C\\leftarrow E} = P_{C\\leftarrow B}P_{B\\leftarrow E} \\begin{bmatrix}1 & 1 & 1\\\\0 & 1 & 0\\\\1 & 1 & 0\\end{bmatrix}$。",
    "keywords": ["过渡矩阵"],
    "level": "中等"
  },
  {
    "catalog": "向量与向量空间",
    "question": "求过渡矩阵与坐标变换矩阵之间的关系。",
    "solution": "设 $B$ 和 $C$ 分别为一个向量空间中的两个不同的基对应的矩阵。由过渡矩阵与基之间的关系 $C = B P$，以及坐标变换矩阵与坐标向量之间的关系 $[\\mathbf{x}]_C = P_{C\\leftarrow B} [\\mathbf{x}]_B$，又由于 $\\mathbf{x} = C[\\mathbf{x}]_C = B[\\mathbf{x}]_B$，可得 $P = B^{-1}C$，$P_{C\\leftarrow B} = C^{-1}B$，因此 $P_{C\\leftarrow B}$和 $P$ 之间是互逆的关系。",
    "keywords": ["过渡矩阵", "坐标变换矩阵"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "已知 $A=\\begin{bmatrix}1&-2\\\\0&3\\\\2&1\\end{bmatrix}$，$B=\\begin{bmatrix}2&0\\\\-1&4\\\\3&1\\end{bmatrix}$。计算 $A+B$ 与 $2A-3B$。",
    "solution": "$A+B=\\begin{bmatrix}3&-2\\\\-1&7\\\\5&2\\end{bmatrix}$；$2A-3B=\\begin{bmatrix}2&-4\\\\0&6\\\\4&2\\end{bmatrix}-\\begin{bmatrix}6&0\\\\-3&12\\\\9&3\\end{bmatrix}=\\begin{bmatrix}-4&-4\\\\3&-6\\\\-5&-1\\end{bmatrix}$。",
    "keywords": ["矩阵加法与标量乘法"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&2\\\\3&-1\\end{bmatrix}$，$B=\\begin{bmatrix}0&1\\\\-2&4\\end{bmatrix}$。求标量 $c$ 使 $cA+B=\\begin{bmatrix}2&5\\\\4&2\\end{bmatrix}$。",
    "solution": "比较对应元素得 $c+0=2\\Rightarrow c=2$；检验：$2A+B=\\begin{bmatrix}2&4\\\\6&-2\\end{bmatrix}+\\begin{bmatrix}0&1\\\\-2&4\\end{bmatrix}=\\begin{bmatrix}2&5\\\\4&2\\end{bmatrix}$。",
    "keywords": ["矩阵加法与标量乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "给定 $A,B,C$ 为同型矩阵。证明 $(A+B)+C=A+(B+C)$ 且存在唯一矩阵 $-A$ 使 $A+(-A)=0$。",
    "solution": "逐项定义下 $((A+B)+C)_{ij}=(a_{ij}+b_{ij})+c_{ij}=a_{ij}+(b_{ij}+c_{ij})=(A+(B+C))_{ij}$，故结合律成立。取 $-A=[-a_{ij}]$，则 $(A+(-A))_{ij}=a_{ij}+(-a_{ij})=0$，唯一性来自逐项相等。",
    "keywords": ["矩阵加法与标量乘法"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&2&0\\\\-1&3&1\\end{bmatrix}$，$B=\\begin{bmatrix}2&1\\\\0&-1\\\\3&2\\end{bmatrix}$。计算 $AB$。",
    "solution": "$AB=\\begin{bmatrix}1&2&0\\\\-1&3&1\\end{bmatrix}\\begin{bmatrix}2&1\\\\0&-1\\\\3&2\\end{bmatrix}=\\begin{bmatrix}2&-1\\\\-2&1\\end{bmatrix}+\\begin{bmatrix}0&-2\\\\0&-3\\end{bmatrix}+\\begin{bmatrix}0&0\\\\3&2\\end{bmatrix}=\\begin{bmatrix}2&-3\\\\1&0\\end{bmatrix}$。",
    "keywords": ["矩阵乘法"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "举出 $2\\times2$ 矩阵 $A,B$ 使 $AB\\ne BA$，并计算二者。",
    "solution": "取 $A=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$，$B=\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$。则 $AB=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$，$BA=\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}$，显然 $AB\\ne BA$。",
    "keywords": ["矩阵乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$，$X$ 满足 $AX=\\begin{bmatrix}2&0\\\\3&1\\end{bmatrix}$。求 $X$。",
    "solution": "由列视角 $AX=[A\\mathbf{x}_1\\ A\\mathbf{x}_2]$，解 $A\\mathbf{x}_1=(2,3)^{\\mathsf{T}}$ 与 $A\\mathbf{x}_2=(0,1)^{\\mathsf{T}}$。高斯消元得 $\\mathbf{x}_1=( -1,3)^{\\mathsf{T}}$，$\\mathbf{x}_2=( -1,1)^{\\mathsf{T}}$，故 $X=\\begin{bmatrix}-1&-1\\\\3&1\\end{bmatrix}$。",
    "keywords": ["矩阵乘法", "矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "计算 $A^{\\mathsf{T}}$，其中 $A=\\begin{bmatrix}1&-2&0\\\\3&1&4\\end{bmatrix}$。",
    "solution": "$A^{\\mathsf{T}}=\\begin{bmatrix}1&3\\\\-2&1\\\\0&4\\end{bmatrix}$。",
    "keywords": ["矩阵转置"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "验证 $(AB)^{\\mathsf{T}}=B^{\\mathsf{T}}A^{\\mathsf{T}}$，取 $A=\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$，$B=\\begin{bmatrix}2&-1\\\\3&0\\end{bmatrix}$。",
    "solution": "$AB=\\begin{bmatrix}8&-1\\\\3&0\\end{bmatrix}$，$(AB)^{\\mathsf{T}}=\\begin{bmatrix}8&3\\\\-1&0\\end{bmatrix}$；$B^{\\mathsf{T}}A^{\\mathsf{T}}=\\begin{bmatrix}2&3\\\\-1&0\\end{bmatrix}\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}=\\begin{bmatrix}8&3\\\\-1&0\\end{bmatrix}$，相等。",
    "keywords": ["矩阵转置", "矩阵乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A$ 可逆，证明 $(A^{-1})^{\\mathsf{T}}=(A^{\\mathsf{T}})^{-1}$。",
    "solution": "由 $AA^{-1}=I$ 两边转置得 $(A^{-1})^{\\mathsf{T}}A^{\\mathsf{T}}=I$，同理 $A^{\\mathsf{T}}(A^{-1})^{\\mathsf{T}}=I$，故 $(A^{-1})^{\\mathsf{T}}=(A^{\\mathsf{T}})^{-1}$。",
    "keywords": ["矩阵转置", "矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "写出 $I_3$ 并计算 $AI_3$ 与 $I_3A$，其中 $A=\\begin{bmatrix}1&2&3\\\\0&1&4\\\\2&0&1\\end{bmatrix}$。",
    "solution": "$I_3=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{bmatrix}$，按定义 $AI_3=I_3A=A$。",
    "keywords": ["单位矩阵", "矩阵乘法"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "若 $AX=A$ 对所有 $A$ 都成立，求矩阵 $X$。",
    "solution": "取 $A=I$ 得 $XI=I$，取 $A$ 的任意列基向量 $e_i$，由 $AX=A$ 推出 $Xe_i=e_i$，故 $X=I$。",
    "keywords": ["单位矩阵"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $X$ 满足 $XAX=A$ 对所有 $A$，证明并确定 $X$。",
    "solution": "取 $A=I$ 得 $X=I$；再代回对任意 $A$ 有 $IAI=A$ 成立，故 $X=I$ 是唯一解。",
    "keywords": ["单位矩阵"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&-2\\\\3&0\\end{bmatrix}$，与零矩阵 $0$ 的和与积分别为何？",
    "solution": "$A+0=A$；若尺寸适配，$A\\cdot 0=0$ 且 $0\\cdot A=0$。",
    "keywords": ["零矩阵"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "证明对任意标量 $c$，有 $c\\cdot 0=0$；并说明若 $A\\mathbf{x}=\\mathbf{0}$，则 $A$ 的零空间非空。",
    "solution": "按分配律 $c\\cdot 0=c(0+0)=c0+c0$ 推出 $c0=0$。齐次方程组总有平凡解 $\\mathbf{x}=\\mathbf{0}$，零空间至少含零向量。",
    "keywords": ["零矩阵", "线性变换"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A$ 为非零矩阵且 $AX=0$，给出一组非零 $X$ 的构造思路。",
    "solution": "若 $A$ 的列数 $n>\\operatorname{rank}(A)$，则零空间维数 $n-\\operatorname{rank}(A)>0$，可通过行化简取自由变量得到非零解向量 $X$。",
    "keywords": ["零矩阵", "矩阵的秩"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "令 $D=\\operatorname{diag}(2, -1, 3)$。计算 $D\\mathbf{x}$，其中 $\\mathbf{x}=(1,2,-1)^{\\mathsf{T}}$。",
    "solution": "$D\\mathbf{x}=(2\\cdot1, -1\\cdot2, 3\\cdot(-1))^{\\mathsf{T}}=(2,-2,-3)^{\\mathsf{T}}$。",
    "keywords": ["对角矩阵", "线性变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "对 $D=\\operatorname{diag}(a,b,c)$，在 $abc\\ne0$ 时求 $D^{-1}$ 与 $\\det D$。",
    "solution": "$D^{-1}=\\operatorname{diag}(1/a,1/b,1/c)$；$\\det D=abc$。",
    "keywords": ["对角矩阵", "矩阵的逆"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "计算 $D^k$，其中 $D=\\operatorname{diag}(2,3,4)$，$k\\in\\mathbb{N}$。",
    "solution": "$D^k=\\operatorname{diag}(2^k,3^k,4^k)$，来自对角矩阵乘法按分量进行。",
    "keywords": ["对角矩阵", "矩阵乘法"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "判断并说明 $U=\\begin{bmatrix}1&2&-1\\\\0&3&4\\\\0&0&5\\end{bmatrix}$ 是否为上三角矩阵；求 $\\det U$。",
    "solution": "主对角线下方元素全为 $0$，是上三角矩阵；$\\det U=1\\cdot3\\cdot5=15$。",
    "keywords": ["三角矩阵", "特殊矩阵的行列式"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $L=\\begin{bmatrix}2&0&0\\\\-1&1&0\\\\3&4&-2\\end{bmatrix}$。判断其类型并给出可逆条件。",
    "solution": "$L$ 为下三角矩阵；当且仅当对角元均非零（此处 $2,1,-2$）时可逆。",
    "keywords": ["三角矩阵", "矩阵的逆"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "求上三角矩阵 $U=\\begin{bmatrix}1&2&1\\\\0&2&-1\\\\0&0&3\\end{bmatrix}$ 的逆矩阵。",
    "solution": "逐列求解 $U\\mathbf{x}_i=e_i$ 得 $U^{-1}=\\begin{bmatrix}1&-1&-\\tfrac{1}{3}\\\\0&\\tfrac{1}{2}&\\tfrac{1}{6}\\\\0&0&\\tfrac{1}{3}\\end{bmatrix}$。",
    "keywords": ["三角矩阵", "矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "判断 $A=\\begin{bmatrix}2&-1&0\\\\-1&3&1\\\\0&1&4\\end{bmatrix}$ 是否对称；给出 $A^{\\mathsf{T}}$。",
    "solution": "$A^{\\mathsf{T}}=\\begin{bmatrix}2&-1&0\\\\-1&3&1\\\\0&1&4\\end{bmatrix}=A$，因此为对称矩阵。",
    "keywords": ["对称矩阵", "矩阵转置"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "证明对任意矩阵 $B$，$B^{\\mathsf{T}}B$ 为对称矩阵；并说明其半正定性。",
    "solution": "$(B^{\\mathsf{T}}B)^{\\mathsf{T}}=B^{\\mathsf{T}}(B^{\\mathsf{T}})^{\\mathsf{T}}=B^{\\mathsf{T}}B$，故对称；且对任意 $\\mathbf{x}$ 有 $\\mathbf{x}^{\\mathsf{T}}B^{\\mathsf{T}}B\\mathbf{x}=\\|B\\mathbf{x}\\|^2\\ge0$，半正定。",
    "keywords": ["对称矩阵", "矩阵转置"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "对称矩阵 $A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}$，求其特征值并写出正交对角化。",
    "solution": "特征多项式 $|A-\\lambda I|=(2-\\lambda)^2-1=\\lambda^2-4\\lambda+3$，根为 $1,3$。取单位特征向量 $\\tfrac{1}{\\sqrt2}(1,-1)^{\\mathsf{T}}$ 与 $\\tfrac{1}{\\sqrt2}(1,1)^{\\mathsf{T}}$，得 $A=Q\\operatorname{diag}(1,3)Q^{\\mathsf{T}}$。",
    "keywords": ["对称矩阵", "线性变换"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "求 $A=\\begin{bmatrix}1&2\\\\3&5\\end{bmatrix}$ 的逆矩阵。",
    "solution": "$A^{-1}=\\dfrac{1}{1\\cdot5-2\\cdot3}\\begin{bmatrix}5&-2\\\\-3&1\\end{bmatrix}=\\begin{bmatrix}-5&2\\\\3&-1\\end{bmatrix}$。",
    "keywords": ["矩阵的逆", "二阶行列式"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "已知可逆矩阵 $A,B$，验证 $(AB)^{-1}=B^{-1}A^{-1}$。",
    "solution": "$(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AA^{-1}=I$，右乘同理，结论成立。",
    "keywords": ["矩阵的逆", "矩阵乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "若 $A$ 可逆且 $AX=I$，证明 $X=A^{-1}$；并说明解的唯一性。",
    "solution": "左乘 $A^{-1}$ 得 $X=A^{-1}$。若还有 $Y$ 满足 $AY=I$，则 $Y=A^{-1}$，故唯一。",
    "keywords": ["矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "求矩阵 $A=\\begin{bmatrix}1&2&3\\\\2&4&6\\\\0&1&1\\end{bmatrix}$ 的秩。",
    "solution": "行化简：$R_2\\leftarrow R_2-2R_1$ 得 $\\begin{bmatrix}1&2&3\\\\0&0&0\\\\0&1&1\\end{bmatrix}$，再 $R_1\\leftarrow R_1-2R_3$ 得 $\\begin{bmatrix}1&0&1\\\\0&0&0\\\\0&1&1\\end{bmatrix}$，有两个主元，秩为 $2$。",
    "keywords": ["矩阵的秩", "初等行变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A$ 可逆，证明 $\\operatorname{rank}(AB)=\\operatorname{rank}(B)$。",
    "solution": "左乘可逆矩阵不改变列空间维数：$\\mathcal{Col}(AB)=\\{A\\mathbf{y}:\\mathbf{y}\\in\\mathcal{Col}(B)\\}$ 与 $A$ 为双射，故维数保持，$\\operatorname{rank}(AB)=\\operatorname{rank}(B)$。",
    "keywords": ["矩阵的秩", "矩阵乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "对 $A_t=\\begin{bmatrix}1&t&1\\\\0&1&1\\\\1&1&1\\end{bmatrix}$，求使秩降为 $2$ 的 $t$。",
    "solution": "计算行列式 $\\det(A_t)=1+t-1-(t-1)=2-t$。当且仅当 $t=2$ 时行列式为 $0$，秩降至 $2$。",
    "keywords": ["矩阵的秩", "三阶行列式"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "写出实现行变换 $R_2\\leftarrow R_2-3R_1$ 的初等矩阵 $E$ 并计算 $EA$，其中 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$。",
    "solution": "$E=\\begin{bmatrix}1&0\\\\-3&1\\end{bmatrix}$，$EA=\\begin{bmatrix}1&2\\\\0&-2\\end{bmatrix}$。",
    "keywords": ["初等矩阵", "初等行变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "分别给出对应于三类初等行变换的初等矩阵示例。",
    "solution": "(1) 交换 $R_1\\leftrightarrow R_2$: $\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$；(2) 倍乘 $R_2\\leftarrow 5R_2$: $\\begin{bmatrix}1&0\\\\0&5\\end{bmatrix}$；(3) 倍加 $R_2\\leftarrow R_2+2R_1$: $\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}$。",
    "keywords": ["初等矩阵"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "证明任一初等矩阵可逆且其逆为同类初等矩阵。",
    "solution": "三类变换的逆分别是自身或同类：交换行的逆仍为交换，倍乘 $c$ 的逆为倍乘 $1/c$，倍加 $R_i\\leftarrow R_i+cR_j$ 的逆为 $R_i\\leftarrow R_i-cR_j$。因此初等矩阵均可逆。",
    "keywords": ["初等矩阵", "矩阵的逆"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "使用高斯—若尔当法求 $A=\\begin{bmatrix}1&2\\\\3&5\\end{bmatrix}$ 的逆。",
    "solution": "对 $[A\\mid I]$ 行变换：$\\begin{bmatrix}1&2\\mid1&0\\\\3&5\\mid0&1\\end{bmatrix}\\xrightarrow{R_2-3R_1}\\begin{bmatrix}1&2\\mid1&0\\\\0&-1\\mid-3&1\\end{bmatrix}\\xrightarrow{R_2\\leftarrow- R_2}\\begin{bmatrix}1&2\\mid1&0\\\\0&1\\mid3&-1\\end{bmatrix}\\xrightarrow{R_1-2R_2}\\begin{bmatrix}1&0\\mid-5&2\\\\0&1\\mid3&-1\\end{bmatrix}$，右块即 $A^{-1}$。",
    "keywords": ["逆矩阵的求法", "初等行变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "用伴随矩阵公式求 $A=\\begin{bmatrix}2&1&0\\\\0&1&1\\\\1&0&1\\end{bmatrix}$ 的逆。",
    "solution": "计算 $\\det A=2$，$\\operatorname{adj}A=\\begin{bmatrix}1&-1&1\\\\-1&2&-2\\\\-1&1&2\\end{bmatrix}$，故 $A^{-1}=\\tfrac{1}{2}\\operatorname{adj}A$。",
    "keywords": ["逆矩阵的求法", "伴随矩阵"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设分块矩阵 $M=\\begin{bmatrix}A&B\\\\0&D\\end{bmatrix}$，其中 $A,D$ 可逆。求 $M^{-1}$。",
    "solution": "块三角逆为 $M^{-1}=\\begin{bmatrix}A^{-1}&-A^{-1}BD^{-1}\\\\0&D^{-1}\\end{bmatrix}$，直接验证 $MM^{-1}=I$。",
    "keywords": ["逆矩阵的求法", "分块矩阵"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix},\\ B=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$。计算分块积 $\\begin{bmatrix}A&0\\\\0&B\\end{bmatrix}\\begin{bmatrix}I&X\\\\0&I\\end{bmatrix}$。",
    "solution": "块乘法得 $\\begin{bmatrix}A&AX\\\\0&B\\end{bmatrix}$。",
    "keywords": ["分块矩阵", "矩阵乘法"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "已知 $A$ 可逆，证明 $\\det\\begin{bmatrix}A&B\\\\0&D\\end{bmatrix}=\\det(A)\\det(D)$。",
    "solution": "块上三角行列式等于对角块行列式之积，可通过展开或行变换严格证明。",
    "keywords": ["分块矩阵", "特殊矩阵的行列式"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "对 $A=\\begin{bmatrix}2&4&2\\\\1&3&1\\\\1&1&1\\end{bmatrix}$，做不选主元的 $LU$ 分解。",
    "solution": "消元得 $L=\\begin{bmatrix}1&0&0\\\\1/2&1&0\\\\1/2&-1&1\\end{bmatrix}$，$U=\\begin{bmatrix}2&4&2\\\\0&1&0\\\\0&0&1\\end{bmatrix}$，满足 $A=LU$。",
    "keywords": ["LU分解"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "用 $LU$ 分解快速求解 $A\\mathbf{x}=\\mathbf{b}$，其中 $A=\\begin{bmatrix}2&1\\\\4&3\\end{bmatrix}$，$\\mathbf{b}=(1,2)^{\\mathsf{T}}$。",
    "solution": "$A=LU$，$L=\\begin{bmatrix}1&0\\\\2&1\\end{bmatrix}$，$U=\\begin{bmatrix}2&1\\\\0&1\\end{bmatrix}$。先解 $L\\mathbf{y}=\\mathbf{b}$ 得 $\\mathbf{y}=(1,0)^{\\mathsf{T}}$；后解 $U\\mathbf{x}=\\mathbf{y}$ 得 $x_2=0,x_1=1$。",
    "keywords": ["LU分解", "矩阵方程"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "对 $A=\\begin{bmatrix}0&2\\\\1&1\\end{bmatrix}$ 做带行交换的分解 $PA=LU$，并写出 $P,L,U$。",
    "solution": "交换行以获得非零主元：$P=\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$，则 $PA=\\begin{bmatrix}1&1\\\\0&2\\end{bmatrix}=LU$，其中 $L=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，$U=\\begin{bmatrix}1&1\\\\0&2\\end{bmatrix}$。",
    "keywords": ["LU分解", "初等矩阵"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "判断映射 $T:\\mathbb{R}^2\\to\\mathbb{R}^2$，$T(x,y)=(2x-y,\\ x+3y)$ 是否线性，并给出其矩阵。",
    "solution": "满足加法与数乘的线性性，矩阵为 $A=\\begin{bmatrix}2&-1\\\\1&3\\end{bmatrix}$，有 $T(\\mathbf{x})=A\\mathbf{x}$。",
    "keywords": ["线性变换", "线性映射"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $T:\\mathbb{R}^3\\to\\mathbb{R}^2$ 满足 $T(x,y,z)=(x+2z,\\ 3y-z)$。求 $T$ 的核与像的维数。",
    "solution": "矩阵 $A=\\begin{bmatrix}1&0&2\\\\0&3&-1\\end{bmatrix}$，秩为 $2$，故像的维数为 $2$；核的维数 $=3-2=1$，解 $A\\mathbf{x}=0$ 得 $\\mathcal{N}(A)=\\operatorname{span}\\{(-2,1,1)^{\\mathsf{T}}\\}$。",
    "keywords": ["线性变换", "矩阵的秩"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "令 $T:\\mathbb{R}^2\\to\\mathbb{R}^2$，$T(x,y)=(x,0)$。判断其是否可逆，并解释。",
    "solution": "$T$ 将所有向量投影到 $x$ 轴，核非零（包含 $(0,1)$），非单射，故不可逆。",
    "keywords": ["线性变换", "单射与满射"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "给出二维到 $x$ 轴的投影矩阵 $P$ 并验证 $P^2=P$。",
    "solution": "$P=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$，$P^2=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}=P$。",
    "keywords": ["投影变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&1\\\\1&2\\end{bmatrix}$ 满列秩。写出到 $\\mathcal{Col}(A)$ 的正交投影矩阵。",
    "solution": "$A$ 为满列秩（秩为 2），且 $A$ 本身可逆。此时 $\\mathcal{Col}(A)=\\mathbb{R}^2$，正交投影到整个空间就是恒等映射，故 $P=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$。",
    "keywords": ["投影变换", "矩阵乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "证明：若 $P$ 为正交投影，则 $P$ 对称且 $\\|\\mathbf{b}-P\\mathbf{b}\\|$ 最小（最小二乘）。",
    "solution": "正交投影满足 $P^2=P$ 且 $P=P^{\\mathsf{T}}$；对任意 $\\mathbf{b}$，将其分解为 $\\mathcal{R}(P)$ 与 $\\mathcal{N}(P)$ 的直和，误差向量位于正交补，故范数最小。",
    "keywords": ["投影变换", "线性变换"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "二维水平剪切 $S_k=\\begin{bmatrix}1&k\\\\0&1\\end{bmatrix}$。计算 $S_k(1,2)^{\\mathsf{T}}$ 并给出 $\\det S_k$。",
    "solution": "$S_k(1,2)^{\\mathsf{T}}=(1+2k,2)^{\\mathsf{T}}$，$\\det S_k=1$。",
    "keywords": ["剪切变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "证明任意二维剪切的行列式为 $1$，并说明其几何意义。",
    "solution": "$S_k$ 或其竖直类似均为上/下三角且对角线为 $(1,1)$，故行列式 $1$；几何上保持面积与取向，改变形状。",
    "keywords": ["剪切变换", "行列式的几何意义"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "将两次剪切复合：$S_aS_b$。证明存在 $c$ 使 $S_aS_b=S_c$ 并求 $c$。",
    "solution": "$S_aS_b=\\begin{bmatrix}1&a\\\\0&1\\end{bmatrix}\\begin{bmatrix}1&b\\\\0&1\\end{bmatrix}=\\begin{bmatrix}1&a+b\\\\0&1\\end{bmatrix}=S_{a+b}$，故 $c=a+b$。",
    "keywords": ["剪切变换", "矩阵乘法"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "写出平面旋转 $90^{\\circ}$ 的矩阵并计算其作用：$R_{90}(1,0)^{\\mathsf{T}}$。",
    "solution": "$R_{90}=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$，$R_{90}(1,0)^{\\mathsf{T}}=(0,1)^{\\mathsf{T}}$。",
    "keywords": ["旋转变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "验证 $R(\\alpha)R(\\beta)=R(\\alpha+\\beta)$，取 $\\alpha=30^{\\circ},\\beta=45^{\\circ}$。",
    "solution": "直接乘法可得等式成立；矩阵为 $\\begin{bmatrix}\\cos\\alpha&-\\sin\\alpha\\\\\\sin\\alpha&\\cos\\alpha\\end{bmatrix}$，利用三角恒等式化简即得。",
    "keywords": ["旋转变换", "矩阵乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "讨论平面旋转矩阵 $R(\\theta)$ 的特征值。",
    "solution": "复域上特征值为 $e^{\\pm i\\theta}$；当 $\\theta=0$ 时为 $1$ 的二重根；当 $\\theta=\\pi$ 时为 $-1$ 的二重根；实域上除这两种情况外无实特征值。",
    "keywords": ["旋转变换", "线性变换"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设伸缩矩阵 $D=\\operatorname{diag}(2,3)$。计算 $D(1,-1)^{\\mathsf{T}}$ 并给出面积放缩因子。",
    "solution": "$D(1,-1)^{\\mathsf{T}}=(2,-3)^{\\mathsf{T}}$；面积放缩因子为 $|\\det D|=6$。",
    "keywords": ["伸缩变换", "行列式的几何意义"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "给定 $D=\\operatorname{diag}(s_1,s_2,s_3)$。体积放缩因子为何？在何条件下 $D$ 不可逆？",
    "solution": "体积因子为 $|s_1s_2s_3|$；若某 $s_i=0$，则压缩到低维且矩阵不可逆。",
    "keywords": ["伸缩变换", "矩阵的逆"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "对 $D=\\operatorname{diag}(1,1,0)$，说明其核与像并判断是否双射。",
    "solution": "核为 $\\operatorname{span}\\{(0,0,1)^{\\mathsf{T}}\\}$ 非平凡；像为 $xy$ 平面；非单射亦非满射（到 $\\mathbb{R}^3$）。",
    "keywords": ["伸缩变换", "单射与满射"],
    "level": "很难"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "判断 $T:\\mathbb{R}^2\\to\\mathbb{R}^2$，$T(x,y)=(x+y,\\ 2x-y)$ 是否线性并写出矩阵表示。",
    "solution": "线性；矩阵 $A=\\begin{bmatrix}1&1\\\\2&-1\\end{bmatrix}$。",
    "keywords": ["线性映射", "线性变换"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "考虑 $T:\\mathbb{R}^3\\to\\mathbb{R}^3$，$T(x,y,z)=(x+z,\\ y,\\ x-y)$。求 $[T]$（标准基）。",
    "solution": "$[T]=\\begin{bmatrix}1&0&1\\\\0&1&0\\\\1&-1&0\\end{bmatrix}$。",
    "keywords": ["线性映射", "矩阵与向量的乘法"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $T$ 在基 $B$ 下的矩阵为 $[T]_B$，过渡矩阵 $P_{E\\leftarrow B}$ 已知。写出 $[T]_E$。",
    "solution": "$[T]_E=[T]_BP_{E\\leftarrow B}$。",
    "keywords": ["过渡矩阵"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "设 $A=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{bmatrix}$ 表示线性映射 $T:\\mathbb{R}^3\\to\\mathbb{R}^3$。判断 $T$ 是否单射与满射。",
    "solution": "秩为 $2$。核非零，故非单射；像为 $xy$ 平面，非满射到 $\\mathbb{R}^3$。",
    "keywords": ["单射与满射", "矩阵的秩"],
    "level": "简单"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "给定 $A\\in\\mathbb{R}^{m\\times n}$。说明充要条件使 $T_A(\\mathbf{x})=A\\mathbf{x}$ 为单射或满射。",
    "solution": "单射 $\\Leftrightarrow \\mathcal{N}(A)=\\{0\\} \\Leftrightarrow \\operatorname{rank}(A)=n$（需 $n\\le m$）；满射 $\\Leftrightarrow \\mathcal{R}(A)=\\mathbb{R}^m \\Leftrightarrow \\operatorname{rank}(A)=m$（需 $n\\ge m$）。",
    "keywords": ["单射与满射", "线性映射"],
    "level": "中等"
  },
  {
    "catalog": "矩阵与线性变换",
    "question": "考虑 $A_t=\\begin{bmatrix}1&t\\\\0&1\\end{bmatrix}$。对于 $T_t(\\mathbf{x})=A_t\\mathbf{x}$，讨论随 $t$ 变化其单射与满射性。",
    "solution": "$\\det(A_t)=1\\ne0$，对任意 $t$ 可逆，故同时单射与满射（双射）。",
    "keywords": ["单射与满射"],
    "level": "很难"
  }
];
