"use client";

import { AbilityTuple, PureAbility } from "@casl/ability";
import { BoundCanProps } from "@casl/react";
import Error from "./error";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { SimpleCan } from "../shared/permission/Context";

type simplecanProps = BoundCanProps<PureAbility<AbilityTuple, unknown>> & {
  showError?: boolean;
  isErrorCentered?: boolean;
  redirect?: boolean;
  navigate?: boolean;
};

export const Can = ({
  showError = false,
  children,
  isErrorCentered,
  navigate = false,
  ...rest
}: simplecanProps) => {
  const router = useRouter();
  return (
    <SimpleCan
      passThrough={rest.passThrough || showError || navigate}
      {...rest}
    >
      {(allowed) => {
        if (!allowed) {
          if (navigate) {
            router.push("/not-found");
          } else if (showError) {
            return <Error errorCode={403} isCentered={isErrorCentered} />;
          } else if (rest.passThrough) {
            return children as ReactNode;
          }
          return null;
        }
        return children as ReactNode;
      }}
    </SimpleCan>
  );
};
