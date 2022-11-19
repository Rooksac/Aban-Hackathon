require 'csv'
Farsi.destroy_all
English.destroy_all
puts 'seeding english'

CSV.foreach('tmp/Abanhackathonenglish.csv', headers: true) do |row|
    English.create(
        name: row[1],
        age: row[2],
        date: row[3],
        location: row[4],
        image_small: row[5],
        image_large: row[6]
    )
end
puts 'done seeding english'
puts 'seeding farsi'
CSV.foreach('tmp/Abanhackathonfarsi.csv', headers: true) do |row|
    Farsi.create(
        name: row[1],
        age: row[2],
        date: row[3],
        location: row[4],
        image_small: row[5],
        image_large: row[6]
    )
end
puts 'done seeding farsi'