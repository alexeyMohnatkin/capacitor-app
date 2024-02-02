import { useCallback, useState } from "react";
import generatedPayslips, { Payslip } from "./generatePayslips";

const usePayslip = () => {
  const [payslip, setPayslip] = useState<Payslip | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadPayslip = useCallback((id: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setPayslip(generatedPayslips.find((p) => p.id === id) || null);
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    payslip,
    loadPayslip,
    isLoading,
  };
};

export default usePayslip;
