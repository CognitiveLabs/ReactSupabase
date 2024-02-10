import React from "react";

const Body = () => {
  return (
    <main className="flex-1 w-full flex flex-col justify-center items-center">
      <p className="text-4xl signika-header font-extrabold sm:text-center sm:text-6xl">
        My Calendy
      </p>

      <p className="text-4xl signika-title font-extrabold pb-10">
        the Cognitive Calendar
      </p>

      <p className="text-lg sm:text-2xl signika !leading-tight mx-auto max-w-xl text-center mobile-body">
        My Calendy is designed around <b>you</b> to organize your tasks and
        activities based on your <b>cognitive abilities</b>, enhancing your{" "}
        <b>efficiency</b> and <b>productivity</b>.
      </p>
      <p className="text-lg sm:text-2xl signika !leading-tight mx-auto max-w-xl text-center pt-10 mobile-body">
        My Calendy doesn't just tell you <b>when</b> to do something, it tells
        you <b>what</b> to do <b>when</b>. By understanding your fluctuating
        cognitive <b>abilities</b>, it aligns your tasks <b>accordingly</b>.
        Need <b>analytical thinking</b>? My Calendy schedules that for when your
        brain is <b>sharpest</b>.<b> Creative writing</b>? It plans that for
        when your <b>imagination</b> is <b> soaring</b>. It's like having a
        <b> personal productivity coach</b> whispering in your ear, guiding you
        towards
        <b> peak performance</b> hour by hour.
      </p>
    </main>
  );
};

export default Body;
