import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiPlus,
  FiGrid,
  FiBarChart2,
  FiSettings,
  FiSearch,
  FiBell,
  FiMenu,
  FiMoon,
  FiSun,
  FiTag,
  FiEdit2,
  FiTrash2,
  FiCopy,
  FiEye,
  FiChevronDown,
  FiChevronRight,
  FiDownload,
  FiUpload,
  FiHelpCircle,
  FiCheck,
  FiX,
} from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";

// ————————————————————————————————————————————————————————————
// Quizzling — Workspace moderno (JSX puro, sem TypeScript e sem libs de UI)
// Stack: React + Tailwind + Framer Motion + Recharts + react-icons
// ————————————————————————————————————————————————————————————

export default function QuizzlingWorkspace() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState("overview");
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [showCmd, setShowCmd] = useState(false);
  const [toast, setToast] = useState(null);

  const [draft, setDraft] = useState({
    title: "Untitled Quiz",
    description: "Write a short description…",
    tags: ["english", "beginners"],
    visibility: "Private",
    questions: [
      {
        id: cryptoId(),
        type: "single",
        prompt: "Which word is a synonym of 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        answer: 1,
      },
    ],
  });

  const quizzes = useMemo(
    () => [
      { id: cryptoId(), title: "English Basics — A1", desc: "Vocabulary and simple tenses.", tags: ["english", "a1", "vocabulary"], status: "Draft", plays: 384, rating: 4.7, updatedAt: "2025-08-05" },
      { id: cryptoId(), title: "Geography Challenge", desc: "Capitals, flags and continents.", tags: ["geography", "world"], status: "Published", plays: 1093, rating: 4.5, updatedAt: "2025-08-18" },
      { id: cryptoId(), title: "History — World War II", desc: "Events, dates and key figures.", tags: ["history", "ww2"], status: "Published", plays: 742, rating: 4.2, updatedAt: "2025-08-10" },
      { id: cryptoId(), title: "Science Quick Quiz", desc: "Physics & biology basics.", tags: ["science"], status: "Draft", plays: 93, rating: 4.0, updatedAt: "2025-08-22" },
    ],
    []
  );

  const stats = useMemo(
    () => ({
      totals: [
        { label: "Quizzes", value: 24 },
        { label: "Jogos", value: 6421 },
        { label: "Taxa de Conclusão", value: "76%" },
        { label: "Acertos médios", value: "81%" },
      ],
      trend: [
        { d: "Jul", plays: 740 },
        { d: "Aug", plays: 1020 },
        { d: "Sep", plays: 1320 },
        { d: "Oct", plays: 1210 },
        { d: "Nov", plays: 1530 },
        { d: "Dec", plays: 1720 },
      ],
      byCategory: [
        { name: "English", value: 44 },
        { name: "Geography", value: 21 },
        { name: "Science", value: 18 },
        { name: "History", value: 17 },
      ],
    }),
    []
  );

  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowCmd((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0b0f17] dark:to-[#0b0f17] text-gray-800 dark:text-gray-100">
        {/* Topbar */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/20 bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition"
                aria-label="Toggle sidebar"
              >
                <FiMenu className="text-xl" />
              </button>
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-inner" />
                <span className="font-extrabold tracking-tight text-lg">Quizzling</span>
                <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-300 dark:bg-blue-400/10">creator</span>
              </div>
              <div className="hidden md:flex items-center ml-4 px-3 py-2 rounded-2xl bg-black/5 dark:bg-white/10 focus-within:ring-2 ring-blue-500">
                <FiSearch className="opacity-60 mr-2" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar quizzes, tags… (Ctrl/Cmd + K)"
                  className="bg-transparent outline-none placeholder:opacity-60 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((v) => !v)}
                className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition"
                aria-label="Toggle theme"
              >
                {dark ? <FiSun /> : <FiMoon />}
              </button>
              <button className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition">
                <FiBell />
              </button>
              <button className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition">
                <div className="size-7 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-500" />
                <span className="hidden sm:block text-sm font-medium">you@quizzling</span>
                <FiChevronDown className="opacity-60 hidden sm:block" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <nav className="px-2 sm:px-4">
            <div className="flex gap-1 overflow-x-auto no-scrollbar">
              {[
                { id: "overview", label: "Início", icon: <FiHome /> },
                { id: "quizzes", label: "Meus Quizzes", icon: <FiGrid /> },
                { id: "create", label: "Criar", icon: <FiPlus /> },
                { id: "templates", label: "Templates", icon: <FiCopy /> },
                { id: "analytics", label: "Estatísticas", icon: <FiBarChart2 /> },
                { id: "submissions", label: "Respostas", icon: <FiDownload /> },
                { id: "settings", label: "Configurações", icon: <FiSettings /> },
                { id: "help", label: "Ajuda", icon: <FiHelpCircle /> },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 my-2 rounded-xl transition whitespace-nowrap text-sm font-medium ${
                    active === t.id
                      ? "bg-blue-600 text-white shadow"
                      : "hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  <span className="text-base">{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`hidden lg:flex flex-col gap-2 p-3 sticky top-[76px] h-[calc(100dvh-76px)] border-r border-black/5 dark:border-white/10 transition-all ${
              sidebarOpen ? "w-64" : "w-16"
            }`}
          >
            <SideLink icon={<FiHome />} label="Início" active={active === "overview"} onClick={() => setActive("overview")} collapsed={!sidebarOpen} />
            <SideLink icon={<FiGrid />} label="Quizzes" active={active === "quizzes"} onClick={() => setActive("quizzes")} collapsed={!sidebarOpen} />
            <SideLink icon={<FiPlus />} label="Criar" active={active === "create"} onClick={() => setActive("create")} collapsed={!sidebarOpen} />
            <SideLink icon={<FiCopy />} label="Templates" active={active === "templates"} onClick={() => setActive("templates")} collapsed={!sidebarOpen} />
            <SideLink icon={<FiBarChart2 />} label="Estatísticas" active={active === "analytics"} onClick={() => setActive("analytics")} collapsed={!sidebarOpen} />
            <SideLink icon={<FiDownload />} label="Respostas" active={active === "submissions"} onClick={() => setActive("submissions")} collapsed={!sidebarOpen} />
            <SideLink icon={<FiSettings />} label="Configurações" active={active === "settings"} onClick={() => setActive("settings")} collapsed={!sidebarOpen} />
            <div className="mt-auto text-xs opacity-60 px-2">© 2025 Quizzling</div>
          </aside>

          {/* Main */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {active === "overview" && (
                <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-8">
                  <Hero onCreate={() => setActive("create")} />

                  <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {stats.totals.map((t) => (
                      <StatCard key={t.label} label={t.label} value={t.value} />
                    ))}
                  </section>

                  <section className="grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                      <h3 className="font-semibold mb-4">Tendência de jogos</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={stats.trend} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                            <defs>
                              <linearGradient id="plays" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.05} />
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="d" stroke="currentColor" opacity={0.4} />
                            <YAxis stroke="currentColor" opacity={0.4} />
                            <Tooltip contentStyle={{ borderRadius: 12 }} />
                            <Area type="monotone" dataKey="plays" stroke="#2563eb" fill="url(#plays)" strokeWidth={2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="lg:col-span-2 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                      <h3 className="font-semibold mb-4">Categorias mais jogadas</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={stats.byCategory}>
                            <XAxis dataKey="name" stroke="currentColor" opacity={0.4} />
                            <YAxis stroke="currentColor" opacity={0.4} />
                            <Tooltip contentStyle={{ borderRadius: 12 }} />
                            <Bar dataKey="value" radius={[10, 10, 4, 4]} fill="#10b981" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Atalhos</h3>
                      <kbd className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-xs">Ctrl/Cmd + K</kbd>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <QuickAction icon={<FiPlus />} label="Novo Quiz" onClick={() => setActive("create")} />
                      <QuickAction icon={<FiCopy />} label="Templates" onClick={() => setActive("templates")} />
                      <QuickAction icon={<FiBarChart2 />} label="Ver estatísticas" onClick={() => setActive("analytics")} />
                      <QuickAction icon={<FiUpload />} label="Importar CSV" onClick={() => setToast({ title: "Importar", desc: "Upload em breve" })} />
                    </div>
                  </section>
                </motion.div>
              )}

              {active === "quizzes" && (
                <motion.div key="quizzes" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">
                  <SectionHeader title="Meus Quizzes" desc="Gerencie, edite e compartilhe seus quizzes." action={{ label: "Novo Quiz", onClick: () => setActive("create"), icon: <FiPlus /> }} />

                  <div className="flex flex-wrap items-center gap-2">
                    <FilterPill label="Todos" active />
                    <FilterPill label="Published" />
                    <FilterPill label="Draft" />
                    <FilterPill label="English" />
                    <FilterPill label="Science" />
                    <div className="ml-auto flex items-center gap-2">
                      <button className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition text-sm flex items-center gap-2">
                        Ordenar <FiChevronDown />
                      </button>
                      <div className="hidden sm:flex items-center px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">
                        <FiSearch className="opacity-60 mr-2" />
                        <input className="bg-transparent outline-none text-sm w-40" placeholder="Buscar…" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {quizzes
                      .filter((q) => q.title.toLowerCase().includes(search.toLowerCase()))
                      .map((q) => (
                        <QuizCard key={q.id} q={q} onEdit={() => setActive("create")} />
                      ))}
                  </div>
                </motion.div>
              )}

              {active === "create" && (
                <motion.div key="create" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="max-w-5xl mx-auto space-y-6">
                  <SectionHeader title="Criar Quiz" desc="Monte perguntas, escolhas e respostas corretas. Compartilhe com um link." />

                  {/* Meta */}
                  <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Título do quiz">
                        <input
                          value={draft.title}
                          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 outline-none focus:ring-2 ring-blue-500"
                        />
                      </Field>
                      <Field label="Visibilidade">
                        <select
                          value={draft.visibility}
                          onChange={(e) => setDraft({ ...draft, visibility: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 outline-none focus:ring-2 ring-blue-500"
                        >
                          <option>Private</option>
                          <option>Public</option>
                        </select>
                      </Field>
                      <Field label="Tags">
                        <div className="flex flex-wrap gap-2">
                          {draft.tags.map((t, i) => (
                            <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 text-sm">
                              <FiTag /> {t}
                            </span>
                          ))}
                          <button onClick={() => setDraft({ ...draft, tags: [...draft.tags, "new"] })} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-sm hover:bg-black/10 dark:hover:bg-white/20">
                            + tag
                          </button>
                        </div>
                      </Field>
                      <Field label="Descrição">
                        <textarea
                          value={draft.description}
                          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 outline-none focus:ring-2 ring-blue-500"
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Perguntas</h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setDraft((d) => ({
                              ...d,
                              questions: [
                                ...d.questions,
                                { id: cryptoId(), type: "single", prompt: "Nova pergunta", options: ["Opção 1", "Opção 2"], answer: 0 },
                              ],
                            }))
                          }
                          className="px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                          + Adicionar
                        </button>
                        <button className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition">Reordenar</button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {draft.questions.map((q, idx) => (
                        <li key={q.id} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm opacity-60">Q{idx + 1}</span>
                            <div className="flex items-center gap-2">
                              <IconBtn onClick={() => setToast({ title: "Duplicado", desc: `Pergunta ${idx + 1}` })}><FiCopy /></IconBtn>
                              <IconBtn onClick={() =>
                                setDraft((d) => ({
                                  ...d,
                                  questions: d.questions.filter((x) => x.id !== q.id),
                                }))
                              }>
                                <FiTrash2 />
                              </IconBtn>
                            </div>
                          </div>

                          <input
                            value={q.prompt}
                            onChange={(e) =>
                              setDraft((d) => ({
                                ...d,
                                questions: d.questions.map((x) => (x.id === q.id ? { ...x, prompt: e.target.value } : x)),
                              }))
                            }
                            className="w-full mt-3 text-base sm:text-lg font-medium px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 outline-none focus:ring-2 ring-blue-500"
                          />

                          <div className="mt-3 grid sm:grid-cols-2 gap-2">
                            {q.options.map((opt, oi) => {
                              const correct = q.answer === oi;
                              return (
                                <div key={oi} className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                                  correct
                                    ? "bg-emerald-500/10 border-emerald-500/40"
                                    : "bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/10"
                                }`}>
                                  <button
                                    onClick={() =>
                                      setDraft((d) => ({
                                        ...d,
                                        questions: d.questions.map((x) => (x.id === q.id ? { ...x, answer: oi } : x)),
                                      }))
                                    }
                                    className={`size-5 rounded-full flex items-center justify-center border ${
                                      correct ? "bg-emerald-500 border-emerald-500" : "border-black/20"
                                    }`}
                                    title={correct ? "Correta" : "Marcar como correta"}
                                  >
                                    {correct ? <FiCheck className="text-white text-sm" /> : null}
                                  </button>
                                  <input
                                    value={opt}
                                    onChange={(e) =>
                                      setDraft((d) => ({
                                        ...d,
                                        questions: d.questions.map((x) =>
                                          x.id === q.id
                                            ? { ...x, options: x.options.map((oo, k) => (k === oi ? e.target.value : oo)) }
                                            : x
                                        ),
                                      }))
                                    }
                                    className="flex-1 bg-transparent outline-none"
                                  />
                                  <IconBtn onClick={() =>
                                    setDraft((d) => ({
                                      ...d,
                                      questions: d.questions.map((x) =>
                                        x.id === q.id ? { ...x, options: x.options.filter((_, k) => k !== oi) } : x
                                      ),
                                    }))
                                  }>
                                    <FiX />
                                  </IconBtn>
                                </div>
                              );
                            })}
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <button
                              onClick={() =>
                                setDraft((d) => ({
                                  ...d,
                                  questions: d.questions.map((x) =>
                                    x.id === q.id ? { ...x, options: [...x.options, `Opção ${x.options.length + 1}`] } : x
                                  ),
                                }))
                              }
                              className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-sm"
                            >
                              + opção
                            </button>
                            <button className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-sm flex items-center gap-2">
                              <FiUpload /> mídia
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:justify-end">
                      <button className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">Salvar rascunho</button>
                      <button onClick={() => setToast({ title: "Publicado", desc: draft.title })} className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow">Publicar</button>
                      <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow flex items-center gap-2"><FiEye /> Preview</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {active === "templates" && (
                <motion.div key="templates" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">
                  <SectionHeader title="Templates" desc="Comece mais rápido com modelos prontos." />
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {[
                      { title: "Quiz Rápido (5 perguntas)", tags: ["rápido", "genérico"], color: "from-blue-500 to-indigo-500" },
                      { title: "Vocabulário (EN)", tags: ["english", "vocab"], color: "from-emerald-500 to-teal-500" },
                      { title: "Ciências Básicas", tags: ["science"], color: "from-orange-500 to-amber-500" },
                      { title: "História", tags: ["history"], color: "from-rose-500 to-pink-500" },
                      { title: "Geografia", tags: ["geography"], color: "from-purple-500 to-fuchsia-500" },
                      { title: "Custom", tags: ["blank"], color: "from-slate-500 to-gray-500" },
                    ].map((t, i) => (
                      <TemplateCard
                        key={i}
                        title={t.title}
                        tags={t.tags}
                        gradient={t.color}
                        onUse={() => setActive("create")}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {active === "analytics" && (
                <motion.div key="analytics" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">
                  <SectionHeader title="Estatísticas" desc="Acompanhe desempenho e engajamento." />

                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                      <h3 className="font-semibold mb-4">Jogos por mês</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={stats.trend}>
                            <Area type="monotone" dataKey="plays" stroke="#6366f1" fill="#6366f1" fillOpacity={0.15} strokeWidth={2} />
                            <XAxis dataKey="d" stroke="currentColor" opacity={0.4} />
                            <YAxis stroke="currentColor" opacity={0.4} />
                            <Tooltip contentStyle={{ borderRadius: 12 }} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                      <h3 className="font-semibold mb-4">Categorias</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={stats.byCategory} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={4}>
                              {stats.byCategory.map((_, i) => (
                                <Cell key={i} fill={["#22c55e", "#2563eb", "#f59e0b", "#ef4444"][i % 4]} />
                              ))}
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: 12 }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                      <h3 className="font-semibold mb-4">Conclusão</h3>
                      <div className="h-64 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height={220}>
                          <RadialBarChart innerRadius="50%" outerRadius="90%" data={[{ name: "completion", value: 76 }]} startAngle={90} endAngle={-270}>
                            <RadialBar minAngle={15} dataKey="value" cornerRadius={10} fill="#10b981" />
                            <Tooltip contentStyle={{ borderRadius: 12 }} />
                          </RadialBarChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-center text-sm opacity-70">Taxa de conclusão média dos quizzes</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 sm:p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Top quizzes</h3>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {quizzes.map((q) => (
                        <QuizRow key={q.id} q={q} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {active === "submissions" && (
                <motion.div key="subs" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-6">
                  <SectionHeader title="Respostas" desc="Veja tentativas e resultados enviados pelos participantes." />
                  <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-2 sm:p-4 shadow-sm overflow-x-auto">
                    <table className="min-w-[700px] w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500 border-b border-black/5 dark:border-white/10">
                          <th className="py-3 px-2">Participante</th>
                          <th className="py-3 px-2">Quiz</th>
                          <th className="py-3 px-2">Pontuação</th>
                          <th className="py-3 px-2">Tempo</th>
                          <th className="py-3 px-2">Data</th>
                          <th className="py-3 px-2">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 8 }).map((_, i) => (
                          <tr key={i} className="border-b border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">
                            <td className="py-3 px-2">user{i + 1}@mail.com</td>
                            <td className="py-3 px-2">English Basics — A1</td>
                            <td className="py-3 px-2">{70 + (i % 5)}%</td>
                            <td className="py-3 px-2">{5 + (i % 3)}m {12 + (i % 40)}s</td>
                            <td className="py-3 px-2">2025-08-{10 + i}</td>
                            <td className="py-3 px-2">
                              <div className="flex gap-2">
                                <IconBtn title="Ver"><FiEye /></IconBtn>
                                <IconBtn title="Exportar"><FiDownload /></IconBtn>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {active === "settings" && (
                <motion.div key="settings" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="max-w-4xl mx-auto space-y-6">
                  <SectionHeader title="Configurações" desc="Preferências da conta e do workspace." />
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 shadow-sm space-y-4">
                      <h3 className="font-semibold">Perfil</h3>
                      <div className="flex items-center gap-4">
                        <div className="size-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500" />
                        <div className="flex-1 grid sm:grid-cols-2 gap-3">
                          <input defaultValue="you@quizzling" className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 outline-none" />
                          <input defaultValue="Creator" className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 outline-none" />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10">Cancelar</button>
                        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white">Salvar</button>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 shadow-sm space-y-4">
                      <h3 className="font-semibold">Preferências</h3>
                      <ToggleRow label="Tema escuro" checked={dark} onChange={() => setDark((v) => !v)} />
                      <ToggleRow label="Notificações por e-mail" />
                      <ToggleRow label="Auto-save de rascunhos" checked onChange={() => setToast({ title: "Auto-save", desc: "Ativado" })} />
                    </div>
                  </div>
                </motion.div>
              )}

              {active === "help" && (
                <motion.div key="help" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="max-w-4xl mx-auto space-y-6">
                  <SectionHeader title="Ajuda & Atalhos" desc="Dicas rápidas para acelerar seu fluxo." />
                  <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 shadow-sm">
                    <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                      <li className="flex items-center justify-between px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">Novo quiz <kbd className="kbd">N</kbd></li>
                      <li className="flex items-center justify-between px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">Buscar <kbd className="kbd">Ctrl/Cmd + K</kbd></li>
                      <li className="flex items-center justify-between px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">Publicar <kbd className="kbd">Ctrl/Cmd + P</kbd></li>
                      <li className="flex items-center justify-between px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">Preview <kbd className="kbd">Space</kbd></li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>

        {/* Command palette */}
        <AnimatePresence>
          {showCmd && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/40 p-4">
              <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="mx-auto max-w-xl rounded-2xl backdrop-blur bg-white/80 dark:bg-black/40 border border-black/10 dark:border-white/10 shadow-2xl p-4">
                <div className="flex items-center px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10">
                  <FiSearch className="opacity-60 mr-2" />
                  <input autoFocus placeholder="Ir para…" className="bg-transparent outline-none flex-1" />
                </div>
                <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                  <CmdItem icon={<FiPlus />} label="Criar quiz" onClick={() => { setActive("create"); setShowCmd(false); }} />
                  <CmdItem icon={<FiGrid />} label="Meus quizzes" onClick={() => { setActive("quizzes"); setShowCmd(false); }} />
                  <CmdItem icon={<FiBarChart2 />} label="Estatísticas" onClick={() => { setActive("analytics"); setShowCmd(false); }} />
                  <CmdItem icon={<FiSettings />} label="Configurações" onClick={() => { setActive("settings"); setShowCmd(false); }} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70]">
              <div className="px-4 py-3 rounded-2xl shadow-2xl backdrop-blur bg-white/80 dark:bg-black/40 border border-black/10 dark:border-white/10">
                <div className="font-medium">{toast.title}</div>
                {toast.desc && <div className="text-sm opacity-80">{toast.desc}</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ————————————————————————————————————————————————————————————
// Components (JSX puro)
// ————————————————————————————————————————————————————————————

function SideLink({ icon, label, active, onClick, collapsed }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition ${
      active ? "bg-blue-600 text-white" : "hover:bg-black/5 dark:hover:bg-white/10"
    }`}>
      <span className="text-lg">{icon}</span>
      <span className={`${collapsed ? "hidden" : "block"}`}>{label}</span>
    </button>
  );
}

function Hero({ onCreate }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-6 sm:p-10 shadow-xl">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Crie quizzes incríveis em minutos</h1>
        <p className="mt-2 opacity-90 max-w-xl">Organize perguntas, compartilhe com um link e acompanhe estatísticas em tempo real. Um espaço de criação moderno, simples e poderoso.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <button onClick={onCreate} className="px-5 py-3 rounded-2xl bg-white/90 text-blue-700 hover:bg-white shadow-lg font-semibold">Começar agora</button>
          <button className="px-5 py-3 rounded-2xl bg-white/20 hover:bg-white/25">Ver exemplos</button>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -right-10 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 shadow-sm">
      <div className="text-sm opacity-70">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:shadow-md transition text-left">
      <span className="text-xl text-blue-600">{icon}</span>
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs opacity-70">Clique para abrir</div>
      </div>
    </button>
  );
}

function SectionHeader({ title, desc, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{title}</h2>
        {desc && <p className="text-sm opacity-70 mt-1">{desc}</p>}
      </div>
      {action && (
        <button onClick={action.onClick} className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow flex items-center gap-2 text-sm">
          <span className="text-base">{action.icon}</span>
          {action.label}
        </button>
      )}
    </div>
  );
}

function FilterPill({ label, active }) {
  return (
    <button className={`px-3 py-1.5 rounded-full text-sm font-medium transition border ${
      active
        ? "bg-blue-600 text-white border-transparent"
        : "bg-white/70 dark:bg-white/5 border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
    }`}>{label}</button>
  );
}

function QuizCard({ q, onEdit }) {
  return (
    <div className="group rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 shadow-sm hover:shadow-xl transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-lg">{q.title}</h4>
          <p className="text-sm opacity-70 mt-0.5 line-clamp-2">{q.desc}</p>
        </div>
        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
          q.status === "Published" ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300" : "bg-amber-500/15 text-amber-600 dark:text-amber-300"
        }`}>{q.status}</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        {q.tags.map((t, i) => (
          <span key={i} className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs flex items-center gap-1"><FiTag /> {t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="opacity-70">{q.plays} jogos · {q.rating}★</div>
        <div className="flex gap-2">
          <IconBtn title="Editar" onClick={onEdit}><FiEdit2 /></IconBtn>
          <IconBtn title="Preview"><FiEye /></IconBtn>
          <IconBtn title="Excluir" danger><FiTrash2 /></IconBtn>
        </div>
      </div>
      <div className="mt-2 text-xs opacity-60">Atualizado em {q.updatedAt}</div>
    </div>
  );
}

function TemplateCard({ title, tags, gradient, onUse }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm hover:shadow-xl transition">
      <div className={`h-24 bg-gradient-to-tr ${gradient}`} />
      <div className="p-5">
        <h4 className="font-semibold">{title}</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onUse} className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm">Usar template</button>
        </div>
      </div>
    </div>
  );
}

function QuizRow({ q }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 flex items-center justify-between">
      <div>
        <div className="font-semibold">{q.title}</div>
        <div className="text-xs opacity-70">{q.plays} jogos · {q.rating}★</div>
      </div>
      <div className="flex gap-2">
        <IconBtn title="Editar"><FiEdit2 /></IconBtn>
        <IconBtn title="Preview"><FiEye /></IconBtn>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-sm font-medium mb-1 opacity-80">{label}</div>
      {children}
    </label>
  );
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
      <div className="text-sm font-medium">{label}</div>
      <button onClick={onChange} className={`w-12 h-6 rounded-full p-1 transition ${
        checked ? "bg-blue-600" : "bg-black/20 dark:bg-white/20"
      }`}>
        <div className={`size-4 rounded-full bg-white transition ${checked ? "translate-x-6" : "translate-x-0"}`} />
      </button>
    </div>
  );
}

function IconBtn({ children, title, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`size-9 rounded-xl flex items-center justify-center border text-base transition hover:shadow ${
        danger
          ? "border-rose-400/40 text-rose-600 hover:bg-rose-500/10"
          : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function CmdItem({ icon, label, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">
      <span className="text-blue-500">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}

function cryptoId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

// utility opcional (adicione no CSS global do Tailwind):
// .no-scrollbar::-webkit-scrollbar{ display:none } .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none }
// .kbd{ @apply px-2 py-1 rounded bg-black/10 dark:bg-white/10 text-[11px]; }
