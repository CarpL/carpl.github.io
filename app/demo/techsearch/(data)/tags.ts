
export type Tag = {
    id: string,
    colour?: string
}

export type TagGroup = {
    id: string,
    tags: Tag[]
}

const commonTags = [
    'php', 'go', 'js', 'language', 'backend', 'frontend',
    'unit testing', 'integration testing', 'mocking', 'gcp',
    'logging', 'ci/cd', 'common library'
];

export const tagGroups: TagGroup[] = [
    {
        id: 'adoption',
        tags: [
            { id: 'adopt', colour: 'green' },
            { id: 'assess', colour: 'yellow' },
            { id: 'trial', colour: 'orange' },
            { id: 'hold', colour: 'red' }
        ]
    },
    {
        id: 'common',
        tags: commonTags.map((id) => ({ id }))
    }
]

export function getById(id: string): Tag | null {
    for (let tagGroup of tagGroups) {
        let foundTag = tagGroup.tags.find((tag) => (tag.id == id))
        if (foundTag) {
            return foundTag
        }
    }
    return null
}
