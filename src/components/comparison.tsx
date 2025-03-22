'use client'
import { motion } from "framer-motion";


const Comparison = () => {
  return (
    <section id="comparison" className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <motion.div 
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Compare</span></h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  See how Streamo Digital stacks up against other music distribution services
                </p>
              </motion.div>
              
              <motion.div
                className="overflow-x-auto bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/30 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Mobile view - card based layout */}
                <div className="md:hidden">
                  {[
                    { feature: "Keep Your Rights", streamo: true, traditional: true, label: false },
                    { feature: "100% Royalties", streamo: true, traditional: false, label: false },
                    { feature: "Monthly Payouts", streamo: true, traditional: "partial", label: false },
                    { feature: "Fast Release", streamo: true, traditional: "partial", label: true },
                    { feature: "Social Monetization", streamo: true, traditional: "partial", label: true }
                  ].map((item, index) => (
                    <div key={index} className="p-4 border-b border-gray-700/30 last:border-b-0">
                      <h3 className="text-sm font-medium text-white mb-3">{item.feature}</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-green-400 uppercase mb-2">Streamo</span>
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-300 uppercase mb-2">Traditional</span>
                          {item.traditional === true ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : item.traditional === "partial" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full">
                              <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full">
                              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-300 uppercase mb-2">Label</span>
                          {item.label ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full">
                              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Desktop view - table layout */}
                <table className="hidden md:table min-w-full divide-y divide-gray-700/30">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-green-400 uppercase tracking-wider">Streamo Digital</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Traditional Distributor</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Record Label</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Keep Your Rights</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">100% Royalties</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Monthly Payouts</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full">
                          <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Fast Release</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full">
                          <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Social Monetization</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full">
                          <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
              
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">
                  * Traditional distributors often take a percentage of royalties and may have delayed payment schedules. <br className="hidden sm:inline" />
                  * Record labels typically require ownership of your content and pay quarterly or bi-annually after recouping expenses.
                </p>
              </div>
            </div>
          </section>
  )
}

export default Comparison;