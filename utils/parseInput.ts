import { readFile } from "fs/promises"

export const parseInput = async <T=string,>(dir: string, mapFn?: ((val: string) => T)): Promise<T[]> => {
	return readFile(dir, 'utf-8')
		.then(result => {
			const response = result.toString().split('\n')

			if (mapFn !== undefined) {
				return response.map(mapFn)
			} 

			return response as T[]
		})
}
