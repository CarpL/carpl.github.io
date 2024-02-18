import { Tag } from "@/app/demo/techsearch/(data)/tags";
import { getById as getTagById } from "@/app/demo/techsearch/(data)/tags";

export type TechItem = {
    id: string,
    displayName: string,
    tags: Tag[]
}

export const techItems: TechItem[] = [
    buildTechItem('PHP Unit', ['adopt', 'unit testing', 'php']),
    buildTechItem('PHP 8.1', ['adopt', 'php', 'language', 'backend']),
    buildTechItem('Prophecy', ['adopt', 'php', 'mocking', 'unit testing']),
    buildTechItem('TypeScript', ['adopt', 'js', 'frontend', 'language']),
    buildTechItem('JavaScript', ['adopt', 'js', 'frontend', 'language']),
    buildTechItem('NextJS', ['adopt', 'js', 'frontend', 'framework']),
    buildTechItem('Jest', ['adopt', 'js', 'unit testing']),
    buildTechItem('Go', ['adopt', 'go', 'backend', 'language']),
    buildTechItem('Orionx', ['adopt', 'go', 'common library']),
    buildTechItem('Mockery (go)', ['adopt', 'go', 'unit testing', 'mocking']),
    buildTechItem('Cloudbuild', ['hold', 'gcp', 'ci/cd']),
    buildTechItem('GCloud Logs', ['adopt', 'gcp', 'logging']),
    buildTechItem('Jenkins', ['adopt', 'ci/cd', 'automated tasks']),
    buildTechItem('Bitbucket Pipelines', ['trial', 'ci/cd']),
    buildTechItem('AT Component Library', ['trial', 'js', 'common library', 'frontend']),

]

export function getById(id: string): TechItem | null {
    return techItems.find((item) => item.id == id) ?? null;
}

function buildTechItem(displayName: string, tagIds: string[]): TechItem {
    const id = displayName.toLowerCase().replace(/\s/g, '')

    let tags: Tag[] = []
    for (let tagId of tagIds) {
        let tag = getTagById(tagId)
        if (tag != null) {
            tags.push(tag)
        }
    }

    return {
        id,
        displayName,
        tags
    }
}

