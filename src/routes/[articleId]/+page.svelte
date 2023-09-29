<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData
    $: ({ article } = data)
</script>

<form action="?/updateArticle" method="POST">
    <h2>Editing: {article.serial}</h2>
    <input id="serial" name="serial" value="{article.serial}" />
    <button type="submit">Edit article</button>
</form>