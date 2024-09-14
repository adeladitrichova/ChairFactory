interface IGeneratorArgs {
    worksheet: Sheet;
}

interface IGeneratorOptions {

}

const defaultGeneratorOptions : IGeneratorOptions = {

}

export const generate = (args: IGeneratorArgs, opts: IGeneratorOptions = defaultGeneratorOptions): string => {
    console.log(args, opts)
    console.log(args.worksheet.data)
    return ""
};