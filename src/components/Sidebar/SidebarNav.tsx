import { Stack } from "@chakra-ui/layout";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
    <NavSection title="GERAL">
      <NavLink children="Dashboard" icon={RiDashboardLine} href="/dashboard" />
      <NavLink children="Usuários" icon={RiContactsLine} href="/users" />
    </NavSection>
    <NavSection title="GERAL">
      <NavLink children="Formulários" icon={RiInputMethodLine} href="/forms" />
      <NavLink children="Automação" icon={RiGitMergeLine} href="/automation" />
    </NavSection>
  </Stack>
  );
}
