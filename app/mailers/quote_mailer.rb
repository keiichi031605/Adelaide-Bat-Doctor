class QuoteMailer < ApplicationMailer
  def send_mail(quote)
    @quote = quote
    mail(
      from: 'system@example.com',
      to: 'keichi031605@gmail.com',
      subject: 'Quote Notification'
      )
  end
end
