export interface NavItemModelVM {
  title: string,
  route: string,
  icon: string,
}

export interface NavSectionModelVM {
  sectionTitle: 'Caja' | 'Distribucion' | 'EYP',
  baseRoute?: 'caja' | 'distribucion' | 'eyp',
  iconSection: string,
  navItems: NavItemModelVM[],
}
