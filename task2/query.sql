WITH active_plans AS (
	SELECT id AS "subscriptionPlanId", "subscriptionId", "planId", "startedAt", "endedAt" FROM "SubscriptionPlans"
	WHERE ("endedAt" >= DATE '2022-07-01' OR "endedAt" IS NULL)
	AND "startedAt" <= DATE '2022-06-01'
), target_periods AS (
	SELECT id AS "subscriptionPeriodId", "subscriptionId", "periodFrom", "periodTo" FROM "SubscriptionPeriods"
	WHERE "periodFrom" >= DATE '2022-06-01' AND "periodFrom" <= DATE '2022-07-01'
), periods_with_price AS (
	SELECT ap.*, "subscriptionPeriodId", "periodFrom", "periodTo", p.name, p.price FROM active_plans AS ap
	LEFT JOIN target_periods AS tp ON tp."subscriptionId" = ap."subscriptionId"
	JOIN "Plans" AS p ON p.id = ap."planId"
)

SELECT "subscriptionPeriodId", "subscriptionId", SUM(price) as total, STRING_AGG("planId"::TEXT, ',')
FROM periods_with_price 
GROUP BY "subscriptionPeriodId", "subscriptionId";