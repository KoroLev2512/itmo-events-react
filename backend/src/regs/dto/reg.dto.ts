type RegState = 'approved' | 'declined' | 'awaiting' | 'worker' | '';

export class RegDto {
    readonly data: object;
    readonly state: RegState = '';
    readonly comment: string = '';
}
