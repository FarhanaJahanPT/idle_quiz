from odoo import models, fields


class Survey(models.Model):

    _inherit = "survey.survey"


    timer = fields.Float(string="Timer")

    """ Return corresponding field from 'survey.survey' to ``xml_id``. """

    def get_idletime(self):
        for record in self.env['survey.survey'].search([]):
            timer = record.timer
            return timer
