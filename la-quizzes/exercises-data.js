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
    "keywords": ["矩阵方程", "方程组的解集", "自由变量"],
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
  }
];
