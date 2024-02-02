import { useCallback, useState } from "react";
import generatedPayslips, { Payslip } from "./generatePayslips";

// The hook is an abstraction layer on top of the state manager
// Data can come from Redux, Mobx, or whatever is used on the project
const usePayslips = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPayslips = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPayslips(generatedPayslips);
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    payslips,
    loadPayslips,
    isLoading,
  };
};

export default usePayslips;
