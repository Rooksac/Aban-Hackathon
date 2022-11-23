require 'csv'
Farsi.destroy_all
English.destroy_all
Medium.destroy_all
Artwork.destroy_all
SupportforProtestor.destroy_all
puts 'seeding english'

CSV.foreach('db/Abanhackathonenglish.csv', headers: true) do |row|
    English.create(
        name: row[1],
        age: row[2],
        date: row[3],
        location: row[4],
        cause: row[5],
        image_small: row[6],
        image_large: row[7]
    )
end
puts 'done seeding english'
puts 'seeding farsi'
CSV.foreach('db/Abanhackathonfarsi.csv', headers: true) do |row|
    Farsi.create(
        name: row[1],
        age: row[2],
        date: row[3],
        location: row[4],
        cause: row[5],
        image_small: row[6],
        image_large: row[7]
    )
end
puts 'done seeding farsi'

puts 'seeding media'
Medium.create(media: 'https://www.nytimes.com/2019/11/19/world/middleeast/iran-protests.html')
Medium.create(media: 'https://www.nytimes.com/2019/11/17/world/middleeast/iran-protest-rouhani.html?action=click&module=RelatedLinks&pgtype=Article')
Medium.create(media: 'https://www.bbc.com/news/world-middle-east-50562584')
Medium.create(media: 'https://www.bbc.com/news/world-middle-east-50486646')
Medium.create(media: 'https://www.wsj.com/articles/iranians-hold-pro-establishment-rallies-blaming-u-s-for-unrest-11574713713')
Medium.create(media: 'https://www.wsj.com/articles/iran-takes-hard-line-to-keep-protests-down-11575288000')
Medium.create(media: 'https://www.reuters.com/article/us-iran-protests-usa/u-s-says-iran-may-have-killed-more-than-1000-in-recent-protests-idUSKBN1Y926W')
Medium.create(media: 'https://www.theguardian.com/world/2019/nov/24/street-protests-threaten-iran-middle-east-power')
Medium.create(media: 'https://www.theguardian.com/commentisfree/2019/nov/26/the-guardian-view-on-irans-protests-unrest-is-crushed-unhappiness-endures')
Medium.create(media: 'https://www.theguardian.com/world/2019/nov/19/un-urges-restraint-over-reports-of-multiple-deaths-in-iran-protests')
puts 'done seeding media'

puts 'seeding artwork'
Artwork.create(artwork: 'https://www.asymptotejournal.com/visual/some-artists-the-visual-language-of-protest-in-iran/')
Artwork.create(artwork: 'https://artinprotest.viewingrooms.com/viewing-room/7-creative-dissent-in-protest-a-year-in-review-a-collection-of-art-representing-15-protest-movements/?eType=EmailBlastContent&eId=d70ee005-dce0-42c6-a3b7-39ae184a2fe7#iran')
puts 'done seeding artwork'

puts 'seeding support'
SupportforProtestor.create(support: 'https://time.com/6220894/how-to-help-protesters-iran/')
SupportforProtestor.create(support: 'https://stylecaster.com/how-to-help-iran-protests/')
SupportforProtestor.create(support: 'https://www.timeout.com/uk/news/7-ways-you-can-support-iranian-protesters-right-now-102722')
SupportforProtestor.create(support: 'https://www.pbs.org/newshour/world/how-to-help-iranian-women-and-girls-amid-ongoing-protests')
puts 'done seeding support'