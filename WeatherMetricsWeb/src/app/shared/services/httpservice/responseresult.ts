export interface ResponseResult<TData> {
    statusCode: number
    data: TData | null
}