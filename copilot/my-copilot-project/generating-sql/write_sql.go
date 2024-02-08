package main

import "database/sql"

type CategorySummary struct {
	Title    string
	Tasks    int
	AvgValue float64
}

func CreateCategorySummaries(db *sql.DB) ([]CategorySummary, error) {
	rows, err := db.Query("SELECT title, COUNT(*), AVG(value) FROM tasks GROUP BY category_id")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var summaries []CategorySummary
	for rows.Next() {
		var summary CategorySummary
		if err := rows.Scan(&summary.Title, &summary.Tasks, &summary.AvgValue); err != nil {
			return nil, err
		}
		summaries = append(summaries, summary)
	}
	return summaries, nil
}
