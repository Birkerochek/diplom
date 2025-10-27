import { FC } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import clsx from "clsx";

import s from "./Pagination.module.scss";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
  siblings?: number;
  boundaries?: number;
  withControls?: boolean;
  withEdges?: boolean;
};

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  onChange,
  className,
  siblings = 1,
  boundaries = 1,
  withControls = true,
  withEdges = false,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={clsx(s.root, className)}>
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onChange(value)}
        siblingCount={siblings}
        boundaryCount={boundaries}
        hidePrevButton={!withControls}
        hideNextButton={!withControls}
        showFirstButton={withEdges}
        showLastButton={withEdges}
        shape="rounded"
        
      />
    </div>
  );
};
