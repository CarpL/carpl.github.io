type tag = {
    id: string,

}

const rawTags = [
    'php', 'go', 'js', 'language', 'backend', 'frontend', 'unit testing', 'integration testing', 'mocking', 'gcp', 'logging', 'ci/cd', 'common library'
];

export const tags: tag[] = rawTags.map((id) => ({ id }))