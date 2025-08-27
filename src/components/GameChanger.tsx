import { useEffect } from 'react';

// Define the GC object structure on the window
interface GCScheduleWidget {
    init: (options: {
        target: string;
        widgetId: string;
        maxVerticalGamesVisible: number;
    }) => void;
}

interface GCTeam {
    schedule: GCScheduleWidget;
}

interface GC {
    team: GCTeam;
}

declare global {
    interface Window {
        GC?: GC;
    }
}

const GameChanger = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.gc.com/static/js/sdk.v1.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.GC && window.GC.team && window.GC.team.schedule) {
        window.GC.team.schedule.init({
          target: '#gc-schedule-widget-qyif',
          widgetId: 'c2b41381-6cde-4f0e-8580-0652926665bd',
          maxVerticalGamesVisible: 4,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id='gc-schedule-widget-qyif'></div>;
};

export default GameChanger;