import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import { fail } from "@sveltejs/kit"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

export const load: PageServerLoad =async () => {
    return {
        articles: await prisma.article.findMany(),
    } 
}
