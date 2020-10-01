# Preview all emails at http://localhost:3000/rails/mailers/quote_mailer
class QuoteMailerPreview < ActionMailer::Preview
  def quote
    quote = Quote.new(first_name: "AdelaideBat", last_name: "Doctor", enquiry_title: "Repairing", )

    QuoteMailer.send_mail(quote)
 end
end
