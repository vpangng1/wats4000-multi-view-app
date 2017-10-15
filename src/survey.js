// Data for survey questions
export default {
    title: 'New Member Survey',
    description: 'A questionnaire designed to help us get to know you.',
    questions: [
        {
            text: 'How long have you been building websites?',
            type: 'text'
        },
        {
            text: 'What languages interest you most?',
            type: 'checkbox',
            options: [
                {
                    text: 'JavaScript',
                    value: 'js'
                },
                {
                    text: 'Python',
                    value: 'py'
                },
                {
                    text: 'Ruby',
                    value: 'ruby'
                },
                {
                    text: 'Java',
                    value: 'java'
                },
                {
                    text: 'PHP',
                    value: 'php'
                }
            ]
        },
        {
            text: 'What other topics interest you?',
            type: 'checkbox',
            options: [
                {
                    text: 'Accessibility',
                    value: 'axe'
                },
                {
                    text: 'Experience Design',
                    value: 'ux'
                },
                {
                    text: 'Operations',
                    value: 'ops'
                },
                {
                    text: 'Search Engine Optimization',
                    value: 'seo'
                },
                {
                    text: 'Multimedia',
                    value: 'media'
                }
            ]
        },
        {
            text: 'What type of website would you most like to work on?',
            type: 'textarea'
        },
        {
            text: 'Spaces or tabs?',
            type: 'select',
            options: [
                {
                    text: 'Spaces',
                    value: 'spaces'
                },
                {
                    text: 'Tabs',
                    value: 'tabs'
                }
            ]
        }
    ]
}