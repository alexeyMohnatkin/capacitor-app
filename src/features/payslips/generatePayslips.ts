import { addMonths } from "date-fns";

export type Payslip = {
  id: string;
  fromDate: string;
  toDate: string;
  file: string;
};

const generatePayslips = (count: number): Payslip[] => {
  const startDate = new Date("05 October 2011 00:00 UTC");
  return new Array(count).fill(0).map((_, i) => {
    return {
      id: (12345 + i).toString(),
      fromDate: addMonths(startDate, i).toISOString(),
      toDate: addMonths(startDate, i + 1).toISOString(),
      file: "https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf",
    };
  });
};

const payslips = generatePayslips(10);

export default payslips;
