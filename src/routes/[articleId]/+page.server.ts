import type { PageServerLoad } from "../$types";
import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	const getArticle = async () => {
		const article = await prisma.article.findUnique({
			where: {
				id: Number(params.articleId),
			},
		})
		if (!article) {
			throw error(404, "Article not found")
		}
		return article
	}

	return {
		article: getArticle(),
	}
}

export const actions: Actions = {
	updateArticle: async ({ request, params }) => {
		const { serial } = Object.fromEntries(await request.formData()) as {
			serial: string
		}

		try {
			await prisma.article.update({
				where: {
					id: Number(params.articleId),
				},
				data: {
					serial,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not update article" })
		}

		return {
			status: 200,
		}
	},
}