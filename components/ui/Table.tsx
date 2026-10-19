import React from "react";

export function Table({
  className = "",
  containerClassName = "",
  children,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement> & { containerClassName?: string }) {
  return (
    <div className={`w-full overflow-x-auto ${containerClassName}`}>
      <table className={`w-full text-left border-collapse ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={`border-b border-[#E8EEF3] ${className}`} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={`divide-y divide-[#E8EEF3] text-[13px] ${className}`} {...props}>
      {children}
    </tbody>
  );
}

export function TableFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot className={`border-t border-[#E8EEF3] bg-slate-50 font-medium ${className}`} {...props}>
      {children}
    </tfoot>
  );
}

export function TableRow({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`hover:bg-[#F1F7FB]/50 transition-colors ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHead({
  className = "",
  children,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`py-2.5 px-3 text-[#64748B] text-[12px] font-medium tracking-normal ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({
  className = "",
  children,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`py-3 px-3 text-[#1E293B] ${className}`} {...props}>
      {children}
    </td>
  );
}

export default Table;

