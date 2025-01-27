export type NavbarLinkProps = {
    id?: number;
    link: string;
    label: string;
};

export type MembersProps = {
    id?: number | string;
    name: string;
    role: string;
    image: string;
    email: string;
    qulification: string;
    bio: string
}

export type SidebarProps = {
    id?: number | string;
    label: string;
    icon?: Icon;
    link: string;
};