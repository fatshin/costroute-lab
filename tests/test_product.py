import unittest
from pathlib import Path

import product
from runtime.server import page, result_markup


class ProductTests(unittest.TestCase):
    def test_fixed_acceptance(self):
        result = product.analyze({field.name: field.value for field in product.PRODUCT.fields})
        passed, checks = product.acceptance(result)
        self.assertTrue(passed, checks)

    def test_page_is_product_specific_and_escapes_output(self):
        self.assertIn(product.PRODUCT.name, page())
        self.assertNotIn("<script>", result_markup({"status": "<script>", "headline": "safe", "metrics": {}, "items": [], "evidence": [], "artifact": {}}))

    def test_public_fixture_matches_engine_fixture_without_escalation_claim(self):
        site = Path("site/app/product-data.ts").read_text()
        result = product.analyze({field.name: field.value for field in product.PRODUCT.fields})
        self.assertIn('const csvRows = ["case_id,task,model,quality,cost"]', site)
        self.assertIn("index < 20", site)
        for model in product.MODEL_DATA:
            self.assertIn(model, site)
        self.assertIn(result["status"], site)
        self.assertIn("91.5", site)
        self.assertIn("draft→terra, extract→luna, reason→terra", site)
        self.assertIn("95.17", site)
        self.assertIn("7.7", site)
        self.assertNotIn("escalation", site.lower())

    def test_higher_quality_floor_changes_selected_route(self):
        result = product.analyze({"quality_floor": "93", "results": product.CSV_DATA})
        self.assertEqual(
            result["artifact"]["best"]["route"],
            {"draft": "terra", "extract": "gpt-5.6", "reason": "terra"},
        )
        self.assertEqual(result["metrics"]["quality"], 93.5)
        self.assertEqual(result["metrics"]["cost"], 4.7)


if __name__ == "__main__":
    unittest.main()
