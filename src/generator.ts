interface IGeneratorArgs {
    worksheet: Sheet;
}

interface IGeneratorOptions {
    color: string;
    stroke: string;
    strokeWidth: number;
    radius: number;
    seatId: string;
    spacing: {
        vertical: number;
        horizontal: number;
    }
}

const defaultGeneratorOptions : IGeneratorOptions = {
    color: "#F9F9F9",
    stroke: "#CCCCCC",
    strokeWidth: 15,
    radius: 250,
    seatId: "seat",
    spacing: {
        vertical: 135,
        horizontal: 80
    }
}

export const generate = (args: IGeneratorArgs, opts: IGeneratorOptions = defaultGeneratorOptions): string => {
    console.log(args, opts)
    console.log(args.worksheet.data)
    return `
    <svg width="3000" height="3500" viewBox="0 0 3000 3500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="seats:${opts.seatId}">
            ${args.worksheet.data.rows.map((row, rowIndex) => {
                return row.map((seat, seatIndex) => {
                    return `<circle id="${opts.seatId}:${rowIndex+1}+${seat}" cx="${opts.radius+(seatIndex*2*opts.radius)+(seatIndex*opts.spacing.horizontal)}" cy="${opts.radius+(rowIndex*2*opts.radius)+(rowIndex*opts.spacing.vertical)}" r="${opts.radius}" fill="${opts.color}" stroke="${opts.stroke}" stroke-width="${opts.strokeWidth}"/>`
                }).join("\n")    
            }).join("\n")}
        </g>
    </svg>
    `
};