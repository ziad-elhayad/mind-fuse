"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";


interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            className="timeline-item relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group h-full"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06599B]/5 to-[#2D7FC0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Year badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#06599B] to-[#2D7FC0] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#06599B]/30">
                  <Calendar className="w-4 h-4" />
                  {item.year}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#06599B] mb-4 relative z-10">{item.title}</h3>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed relative z-10">{item.description}</p>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#06599B] to-[#2D7FC0] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default memo(AnimatedTimeline);
