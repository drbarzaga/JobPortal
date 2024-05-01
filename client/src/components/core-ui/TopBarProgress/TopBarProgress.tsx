import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const TopBarProgress = () => {
  const loadingBarRef = useRef<any>(null);

  useEffect(() => {
    if (!loadingBarRef.current) return;

    loadingBarRef.current.continuousStart();

    return () => {
      if (!loadingBarRef.current) return;

      loadingBarRef.current.complete();
    };
  }, []);

  return <LoadingBar color="blue" ref={loadingBarRef} />;
};

export default TopBarProgress;
