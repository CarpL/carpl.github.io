type techItem = {
    id: string,
    tags: string[]
}

export const techItems: techItem[] = [
    buildTechItem('PHP Unit', ['unit testing', 'php']),
    buildTechItem('PHP 8.1', ['php', 'language', 'backend']),
    buildTechItem('Prophecy', ['php', 'mocking', 'unit testing']),
    buildTechItem('TypeScript', ['js', 'frontend', 'language']),
    buildTechItem('JavaScript', ['js', 'frontend', 'language']),
    buildTechItem('NextJS', ['js', 'frontend', 'framework']),
    buildTechItem('Jest', ['js', 'unit testing']),
    buildTechItem('Go', ['go', 'backend', 'language']),
    buildTechItem('Orionx', ['go', 'common library']),
    buildTechItem('Mockery (go)', ['go', 'unit testing', 'mocking']),
    buildTechItem('Cloudbuild', ['gcp', 'ci/cd']),
    buildTechItem('GCloud Logs', ['gcp', 'logging']),
    buildTechItem('Jenkins', ['ci/cd', 'automated tasks']),
    buildTechItem('Bitbucket Pipelines', ['ci/cd']),
    buildTechItem('AT Component Library', ['js', 'common library', 'frontend']),

]

function buildTechItem(id: string, tags: string[]): techItem {
    return {
        id,
        tags
    }
}

