export class CreateEventDto {
    readonly id: number;

    readonly title: string;

    readonly description: string;

    readonly imageUrl: string;

    readonly userId: number;

    readonly eventStartDate: number;

    readonly eventExpirationDate?: number;

    readonly regStartDate: number;

    readonly regExpirationDate: number;

    readonly duration: number;

    readonly memberAmount: number;

    readonly visitors: number;

    // @Column({ type: DataType.STRING, allowNull: false })
    //     category: number;
    //
    // @Column({ type: DataType.JSON, allowNull: true })
    //     tags: string;

    readonly formId: number;
}
