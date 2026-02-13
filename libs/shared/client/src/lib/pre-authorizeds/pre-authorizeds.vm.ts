export interface PreAuthorizedVM {
    route: string;
    date: Date;
    receiver: string | null;
    client_name: string;
    client_code: string;
    codre_remission: string;
    status: boolean;
    validated: boolean;
}