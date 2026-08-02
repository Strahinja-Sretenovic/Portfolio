import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowLeft, Search, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData, getLocalizedProject } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";

interface AllProjectsProps {
  onBack: () => void;
}

const ITEMS_PER_PAGE = 9;

export function AllProjects({ onBack }: AllProjectsProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on search query
  const localizedProjects = useMemo(() => {
    return projectsData.map((p) => getLocalizedProject(p, language));
  }, [language]);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return localizedProjects;
    const query = searchQuery.toLowerCase().trim();
    return localizedProjects.filter((proj) => {
      return (
        proj.project.toLowerCase().includes(query) ||
        proj.title.toLowerCase().includes(query) ||
        proj.type.toLowerCase().includes(query) ||
        proj.tags?.some((t) => t.toLowerCase().includes(query)) ||
        proj.points.some((p) => p.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, localizedProjects]);

  // Reset to page 1 on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const paginatedProjects = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Navigation / Back Button */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            whileHover={{ x: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors text-sm font-medium shadow-2xs cursor-pointer"
          >
            <ArrowLeft size={16} />
            {isSr ? "Nazad na Portfolio" : "Back to Portfolio"}
          </motion.button>
        </div>

        {/* Page Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 size={14} />
            {isSr ? "Portfolio Pregled" : "Portfolio Showcase"}
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {isSr ? "Svi Projekti & Radovi" : "All Projects & Portfolio"}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            {isSr
              ? "Sveobuhvatan pregled web platformi, klijentskih aplikacija i backend sistema izrađenih sa fokusom na performanse i moderan dizajn."
              : "A comprehensive list of web platforms, backend systems, and client software engineered with performance and modern standards."}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isSr ? "Pretraži projekte po nazivu, tehnologiji ili opisu..." : "Search projects by name, tech or domain..."}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm text-sm"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#151515] rounded-3xl border border-slate-200 dark:border-white/10 max-w-xl mx-auto">
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              {isSr
                ? `Nema pronalaženih projekata za frazu "${searchQuery}".`
                : `No projects found matching "${searchQuery}".`}
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors"
            >
              {isSr ? "Poništi pretragu" : "Reset Search"}
            </button>
          </div>
        ) : (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProjects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-[#151515] rounded-2xl border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500/40 transition-all shadow-xs hover:shadow-md group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          {proj.date}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {proj.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {proj.link ? (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:underline"
                          >
                            {proj.project}
                            <ExternalLink size={16} className="opacity-70 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          proj.project
                        )}
                      </h3>

                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                        {isSr ? "Uloga:" : "Role:"} <span className="text-slate-700 dark:text-slate-300">{proj.title}</span>
                      </p>

                      <ul className="space-y-2 mb-6">
                        {proj.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-slate-600 dark:text-slate-300 text-xs flex items-start leading-relaxed">
                            <span className="mr-2 mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {proj.tags && proj.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/5">
                        {proj.tags.map((tag, tIdx) => (
                          <motion.span
                            key={tIdx}
                            whileHover={{ y: -1, scale: 1.05 }}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {isSr ? "Prikazano" : "Showing"}{" "}
                <span className="font-semibold text-slate-900 dark:text-white">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span>{" "}
                {isSr ? "do" : "to"}{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)}
                </span>{" "}
                {isSr ? "od ukupno" : "of"}{" "}
                <span className="font-semibold text-slate-900 dark:text-white">{filteredProjects.length}</span>{" "}
                {isSr ? "projekata" : "projects"}
              </p>

              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#151515] text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                        currentPage === page
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#151515] text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
