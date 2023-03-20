
{
    'name': 'Idle Quiz',
    'sequence': 1,
    'category': 'Survey',
    'depends': ['base', 'survey'],
    'data': [
        'views/idle_quiz.xml',
        'views/idle.xml',
    ],
    'assets': {
        'survey.survey_assets': [
            'idle_quiz/static/src/idle.js',
        ]
    },
    'installable': True,
    'auto_install': False,
}