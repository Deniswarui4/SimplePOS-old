import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import { fail } from "@sveltejs/kit"

export const load: PageServerLoad =async () => {
    return {
        articles: await prisma.article.findMany(),
    } 
}

export const actions: Actions = {
    createArticle: async ({ request }) => {
        const { serial, brand, model, processor, ram, storage, condition, body, supplier} = Object.fromEntries(await request.formData()) as {
            serial: string
            brand: string
            model: string
            processor: string
            ram: string
            storage: string
            condition: string
            body: string
            supplier: string
        }

        try{
            await prisma.article.create({
                data: { serial, brand, model, processor, ram, storage, condition, body, supplier }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: "Could not create the record." })
        }

        return {
            status: 201
        }
    },
    deleteArticle:async ({ url }) => {
        const id = url.searchParams .get("id")
        if (!id) {
            return fail(400, { message: "Invalid request "})
        }

        try {
            await prisma.article.delete({
                where: {
                    id: Number(id),
                },
            })
        } catch (err) {
            console.error(err)
            return fail(500, {
                message: "Something went wrong deleting your product",
            })
        }

        return { 
            status: 200, 
        }
    },
}
