export type Role = 'Admin' | 'Editor' | 'Viewer';
export type Status = 'Active' | 'Inactive' | 'Locked';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    status: Status;
    lastLogin: string;
    avatar: string;
}

export const mockUsers: User[] = [
    {
        id: '1',
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        role: 'Admin',
        status: 'Active',
        lastLogin: '2023-10-26',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2RrNSWyIWHdYtKzqsKP-qlC6iRIbs7mL4Ezw2CP-eJncPTk5eSmXMJ1NvKzLEzlcRijOW62ggI5IaVhQUvqx1HRwAAJcyhUYDdOkikLxnI8epq-Oak61W75KqHblpsU0OrnXTmdSf83p09T_AxizfLNSQ-vEdtegIMwKjyg_4Mbp1B44DsnGP3KYejKRe9ysGWPxNPyWpcJfJWU2g0CFUlDGu644Y5SfaPF0Yp7W8JrSYLn8Wn00VLRinaQce2DorByrDMLqY8A',
    },
    {
        id: '2',
        name: 'Maria Garcia',
        email: 'maria.garcia@example.com',
        role: 'Editor',
        status: 'Active',
        lastLogin: '2023-10-25',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAf9tV8gWC1MU7tM_ivCldLw8TM0X8Ejn_-Vg5x7keKiV0_e8F1G2OUlJ9g-03PzPLYRF7KpgRMcJ65l_zAZVrKjfIiWH7LJDqhNGxTEFz7U84ozAxfOKQenj9ZS5DjvU3-f52C5HMi8fG63r2DUFEI3rM81SYnt7SFzlXB4lx6ZKpk2pDd8lby_Qgbmyytd2biHpPXwdsXGQ0M4g-kjUzh3vwGH3FhlEaxw_X9wn9IIyviVyeh-DfkXDobVeyGOV1hvggFVRLFg',
    },
    {
        id: '3',
        name: 'Sam Wilson',
        email: 'sam.wilson@example.com',
        role: 'Viewer',
        status: 'Inactive',
        lastLogin: '2023-09-15',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh7UTOelhGa9lIJxAU1dxGqMzPAqgW2f-aX9jsYRwLiR_5bj2WOYbq7HtLYqSzyxHR2wo7AVuTvAbF4Ko2AVkA8KXGnYgIucgyC32tnY-n0l2guVY8Gakux-OvPy-eHgmMUoo_Zl-u8QbcQnBkz34o0kY1URDknbgxu2wizXryTR9T19FxM2lyQlEJ5Rug6a5bLZLeXrR5GFm4VDPjHiWsO9nu7KvfcfnSCR4YQZjEewIcWkj3zo6mgK9rOj97mEjWo_WuW36Ilw',
    },
    {
        id: '4',
        name: 'Chloe Davis',
        email: 'chloe.davis@example.com',
        role: 'Editor',
        status: 'Active',
        lastLogin: '2023-10-26',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoAhlVXlM6wyyCWoM5aFlt2BrH6Uyy0S8eE47b5TLpOXbPv6QF7Lpws0pfsEwrcD14yKA-T9Sp4BIiij4trUeNU-zluRBOw9lWm5on4w-h6XvkHamKhY0gPc6qAA_hbAP6YgyBZrKWPhgMTl5KFUcSBzxRESs6mBGkHjSyU0_S1S9Xl09vrj8vecqgdXhgt7BXiiuuyr8SSnnNQnzq3BkOerovQ3p8dbsOb7Ng1tgr7LP2L9ocQjKKqU5ikWWrKdD1qVjkEpZ5kw',
    },
    {
        id: '5',
        name: 'Ben Carter',
        email: 'ben.carter@example.com',
        role: 'Viewer',
        status: 'Locked',
        lastLogin: '2023-08-01',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJthlKe66fGenXhWCi2pi9W3p5oreD8wE-K3Eu1vNEuoTzejULg3zc8lQsrFm5chBVe_UdyVprjtOfu3djt4oCW7N6RdgFmPDP8SnQHAVPKhOHZIu2WbsqAF3axVwsQ81wIzSdtyFdqsoHFpGtjvyVwH9ALRczLwFGqKYU6OnG0c2jqmzK7FuIW7LJDqhNGxTEFz7U84ozAxfOKQenj9ZS5DjvU3-f52C5HMi8fG63r2DUFEI3rM81SYnt7SFzlXB4lx6ZKpk2pDd8lby_Qgbmyytd2biHpPXwdsXGQ0M4g-kjUzh3vwGH3FhlEaxw_X9wn9IIyviVyeh-DfkXDobVeyGOV1hvggFVRLFg',
    },
];

export interface Comment {
    id: string;
    author: string;
    avatar: string;
    date: string;
    text: string;
}

export interface Ticket {
    id: string;
    subject: string;
    priority: 'High' | 'Medium' | 'Low';
    requester: string;
    requesterAvatar: string;
    requesterEmail: string;
    date: string;
    status: 'Open' | 'Closed';
    description: string;
    comments: Comment[];
    documents: string[]; // For simplicity, just file names
}

export const mockTickets: Ticket[] = [
    {
        id: '789124',
        subject: 'Cannot Access Reports',
        priority: 'High',
        requester: 'Sam Wilson',
        requesterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh7UTOelhGa9lIJxAU1dxGqMzPAqgW2f-aX9jsYRwLiR_5bj2WOYbq7HtLYqSzyxHR2wo7AVuTvAbF4Ko2AVkA8KXGnYgIucgyC32tnY-n0l2guVY8Gakux-OvPy-eHgmMUoo_Zl-u8QbcQnBkz34o0kY1URDknbgxu2wizXryTR9T19FxM2lyQlEJ5Rug6a5bLZLeXrR5GFm4VDPjHiWsO9nu7KvfcfnSCR4YQZjEewIcWkj3zo6mgK9rOj97mEjWo_WuW36Ilw',
        requesterEmail: 'sam.wilson@example.com',
        date: '8 hours ago',
        status: 'Open',
        description: "I'm trying to access the quarterly sales reports, but I keep getting an \"Access Denied\" error. I have confirmed with my supervisor that I should have the necessary permissions. Could you please investigate?\n\nThank you.",
        comments: [
            {
                id: 'c1',
                author: 'Admin',
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1b8QOWgL9h97DxnaivtBq3Nw4hmXQA1NSlDM-AtZbw-b-xgpIZEDKt2NC61duri3IRDHK6SILebf-aodzDWyNWrw2Q6HOsWGpZPGyF4cvosD_toK5I23Y0fH5_xhfCouXC_O3WtEixko2MRITyGFWE7YX9AhQm1oX_DhL-HsQ9WOw0dIiOYE7ZCy1w6v01ZzhTAGRoPwbd32eQx7N21miakYL2TwvpjfUOEajTeHGKqrmTng1iPqAy8adB3mWO9ULUqKqvXkczQ',
                date: '4 hours ago',
                text: "Hi Sam, I've checked your permissions and they seem correct. I'm escalating this to the technical team to investigate further. We'll update you as soon as we have more information.",
            },
        ],
        documents: [],
    },
    {
        id: '789123',
        subject: 'Password Reset',
        priority: 'Medium',
        requester: 'Maria Garcia',
        requesterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAf9tV8gWC1MU7tM_ivCldLw8TM0X8Ejn_-Vg5x7keKiV0_e8F1G2OUlJ9g-03PzPLYRF7KpgRMcJ65l_zAZVrKjfIiWH7LJDqhNGxTEFz7U84ozAxfOKQenj9ZS5DjvU3-f52C5HMi8fG63r2DUFEI3rM81SYnt7SFzlXB4lx6ZKpk2pDd8lby_Qgbmyytd2biHpPXwdsXGQ0M4g-kjUzh3vwGH3FhlEaxw_X9wn9IIyviVyeh-DfkXDobVeyGOV1hvggFVRLFg',
        requesterEmail: 'maria.garcia@example.com',
        date: '2 days ago',
        status: 'Open',
        description: 'I need to reset my password.',
        comments: [],
        documents: [],
    },
    {
        id: '789125',
        subject: 'Role Change Request',
        priority: 'Low',
        requester: 'Chloe Davis',
        requesterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoAhlVXlM6wyyCWoM5aFlt2BrH6Uyy0S8eE47b5TLpOXbPv6QF7Lpws0pfsEwrcD14yKA-T9Sp4BIiij4trUeNU-zluRBOw9lWm5on4w-h6XvkHamKhY0gPc6qAA_hbAP6YgyBZrKWPhgMTl5KFUcSBzxRESs6mBGkHjSyU0_S1S9Xl09vrj8vecqgdXhgt7BXiiuuyr8SSnnNQnzq3BkOerovQ3p8dbsOb7Ng1tgr7LP2L9ocQjKKqU5ikWWrKdD1qVjkEpZ5kw',
        requesterEmail: 'chloe.davis@example.com',
        date: '5 days ago',
        status: 'Open',
        description: 'Please change my role to Editor.',
        comments: [],
        documents: [],
    },
];
