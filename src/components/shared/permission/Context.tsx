"use client";

import { useContext } from "react";

import { AbilityBuilder, defineAbility, PureAbility } from "@casl/ability";
import { createContextualCan } from "@casl/react";
import { createContext } from "react";
export const actions = {
  ADD: "add",
  VIEW: "view",
  CHANGE: "change",
  DELETE: "delete",
  MANAGE: "manage",
};
export const permissions = {
  add_user: "add-user",
};

export const defaultAbility = defineAbility(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  null;
});
export const AbilityContext = createContext<PureAbility>(defaultAbility);
export const SimpleCan = createContextualCan(AbilityContext.Consumer);

export function updateAbility(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ability: any,
  assignedPermision: string[],
  isSuperAdmin?: boolean,
) {
  const { can, rules } = new AbilityBuilder(ability);
  if (isSuperAdmin) {
    can(actions.MANAGE, "all");
  } else {
    assignedPermision?.forEach((slug: string) => {
      const permissionAction = slug.split("_")?.[0];
      return can(permissionAction, slug);
    });
  }

  ability?.update(rules);
}

export default function PermisionContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AbilityContext.Provider value={defaultAbility}>
      {children}
    </AbilityContext.Provider>
  );
}

const useAbilityContext = () => useContext(AbilityContext);

export { useAbilityContext };
