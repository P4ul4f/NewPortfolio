import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full sm:py-16 md:py-20 lg:py-20 mb-16">
      <h1 className="heading">
        My <span className="text-purple">tech stack</span>
      </h1>
      <div className="my-12 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          icon={<AceternityIcon order="Frontend" />}
          techIcon={[
            "/js.png",
            "/ts.svg",
            "/re.svg",
            "/next.svg",
            "/html.png",
            "redux.png",
            "/css.png",
            "tail.svg",
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-tech rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          icon={<AceternityIcon order="Backend" />}
          techIcon={[
            "/java.png",
            "/python.png",
            "/node.png",
            "/ex.png",
            "/mongodb.svg",
            "/mysql.png",
            "/oracle.png",
            "/api.png",
            "/app.svg",
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-tech rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 255, 255],
              [255, 255, 255],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          icon={<AceternityIcon order="Tools" />}
          techIcon={[
            "/git.png",
            "/github.png",
            "/aws.png",
            "/trello.png",
            "/jira.png",
            "/figma.png",
            "/docker.png",
            "/visual.png",
            "scrum.png",
          ]}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-tech rounded-3xl overflow-hidden"
            colors={[[255, 255, 255]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  icon,
  children,
  techIcon,
}: {
  icon: React.ReactNode;
  children?: React.ReactNode;
  techIcon?: string[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(212,174,238,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hovered && techIcon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute flex flex-wrap items-center justify-center z-30 "
          >
            {techIcon.map((src, index) => (
              <div
                key={index}
                className="w-1/3 flex justify-center items-center pt-6"
              >
                <img
                  src={src}
                  alt={`Tech icon ${index}`}
                  className="w-10 h-full"
                  style={{ margin: 0 }} 
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>

  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
